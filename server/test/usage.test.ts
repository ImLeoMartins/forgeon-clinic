import { describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.ts';
import { llmCostNanos, whatsappCostNanos } from '../src/usage/meter.ts';
import { computeOverage, monthRange, type OrgMonthlyUsage } from '../src/usage/report.ts';

const ADMIN_TOKEN = 'admin-token-de-teste-com-32-caracteres!';

describe('custo de chamada à IA', () => {
  it('soma entrada, saída, leitura e escrita de cache (Sonnet 5.5)', () => {
    // 1000 entrada × $2/M + 500 saída × $10/M + 4000 cache lido × $0,20/M + 2000 cache escrito × $2,50/M
    const nanos = llmCostNanos('claude-sonnet-5-5', {
      input_tokens: 1000,
      output_tokens: 500,
      cache_read_input_tokens: 4000,
      cache_creation_input_tokens: 2000,
    });
    expect(nanos).toBe(2_000_000 + 5_000_000 + 800_000 + 5_000_000); // US$ 0,0128
  });

  it('separa escrita de cache de 1 hora quando a resposta detalha', () => {
    const nanos = llmCostNanos('claude-sonnet-5-5', {
      input_tokens: 0,
      output_tokens: 0,
      cache_creation_input_tokens: 1000,
      cache_creation: { ephemeral_5m_input_tokens: 0, ephemeral_1h_input_tokens: 1000 },
    });
    expect(nanos).toBe(4_000_000);
  });

  it('modelo sem preço fica pendente', () => {
    expect(llmCostNanos('modelo-desconhecido', { input_tokens: 10, output_tokens: 10 })).toBeNull();
  });
});

describe('custo de mensagem do WhatsApp', () => {
  it('mensagem gratuita custa zero', () => {
    expect(whatsappCostNanos('5500000000000', 'service', 'free_customer_service')).toBe(0);
  });

  it('mensagem cobrada sem tarifa cadastrada fica pendente', () => {
    expect(whatsappCostNanos('5500000000000', 'utility', 'regular')).toBeNull();
  });
});

describe('excedente', () => {
  it('dentro da franquia não cobra nada', () => {
    expect(computeOverage(5_000, 10_000, 13_000)).toEqual({ overageCostNanos: 0, overageChargeNanos: 0 });
  });

  it('acima da franquia aplica o markup só no excedente', () => {
    expect(computeOverage(15_000, 10_000, 13_000)).toEqual({ overageCostNanos: 5_000, overageChargeNanos: 6_500 });
  });

  it('mês em UTC, do dia 1 ao dia 1 seguinte', () => {
    const { start, end } = monthRange('2026-12');
    expect(start.toISOString()).toBe('2026-12-01T00:00:00.000Z');
    expect(end.toISOString()).toBe('2027-01-01T00:00:00.000Z');
  });
});

describe('GET /admin/usage', () => {
  const sample: OrgMonthlyUsage = {
    orgId: 'org_fake',
    month: '2026-10',
    planId: 'essencial',
    totalCostNanos: 12_500_000_000,
    includedNanos: 10_000_000_000,
    overageCostNanos: 2_500_000_000,
    overageChargeNanos: 3_250_000_000,
    pendingPriceEvents: 0,
    lines: [],
  };

  const app = buildApp({
    logger: false,
    ping: async () => {},
    whatsapp: {
      appSecret: 's',
      verifyToken: 'v',
      devEcho: false,
      eventStore: { saveNew: async () => [] },
      whatsapp: { sendText: async () => 'x' },
    },
    usage: {
      adminToken: ADMIN_TOKEN,
      report: async (_month, orgId) => (orgId && orgId !== 'org_fake' ? [] : [sample]),
      daily: async () => [{ day: '2026-10-01', costNanos: 1_000_000_000 }],
    },
  });

  it('detalhe da clínica traz o custo por dia', async () => {
    const res = await app.inject({ url: '/admin/usage/org_fake?month=2026-10', headers: { authorization: `Bearer ${ADMIN_TOKEN}` } });
    expect(res.statusCode).toBe(200);
    expect(res.json().daily).toEqual([{ day: '2026-10-01', costNanos: 1_000_000_000 }]);
  });

  it('exige o token da Forgeon', async () => {
    expect((await app.inject({ url: '/admin/usage' })).statusCode).toBe(401);
    const wrong = await app.inject({ url: '/admin/usage', headers: { authorization: 'Bearer errado' } });
    expect(wrong.statusCode).toBe(401);
  });

  it('lista as clínicas do mês com valores em dólar', async () => {
    const res = await app.inject({ url: '/admin/usage?month=2026-10', headers: { authorization: `Bearer ${ADMIN_TOKEN}` } });
    expect(res.statusCode).toBe(200);
    expect(res.json().clinics[0].usd).toEqual({ total: '12.5000', included: '10.0000', overageCost: '2.5000', overageCharge: '3.2500' });
  });

  it('valida o mês e devolve 404 para clínica sem uso', async () => {
    const auth = { authorization: `Bearer ${ADMIN_TOKEN}` };
    expect((await app.inject({ url: '/admin/usage?month=2026-13', headers: auth })).statusCode).toBe(400);
    expect((await app.inject({ url: '/admin/usage/org_outra', headers: auth })).statusCode).toBe(404);
  });
});
