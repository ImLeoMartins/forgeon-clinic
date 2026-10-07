// Dados fictícios para ver o auditor de uso funcionando no banco local.
// Só clínicas `demo-*` e lançamentos com ref `seed:*`; rodar de novo apaga e recria esses dados.
import { inArray, like } from 'drizzle-orm';
import { loadConfig } from '../config.ts';
import { llmCostNanos, whatsappCostNanos } from '../usage/meter.ts';
import { PRICE_BOOK_VERSION } from '../usage/prices.ts';
import { createDb } from './client.ts';
import { billingPlans, orgBilling, usageEvents } from './schema.ts';

const config = loadConfig();
if (config.NODE_ENV !== 'development') throw new Error('O seed de demonstração só roda com NODE_ENV=development.');

const USD = 1_000_000_000; // nano-dólares

const plans = [
  { id: 'demo-essencial', name: 'Essencial (demo)', monthlyFeeCents: 0, feeCurrency: 'BRL' as const, includedUsageNanos: 25 * USD, overageMarkupBps: 13_000 },
  { id: 'demo-profissional', name: 'Profissional (demo)', monthlyFeeCents: 0, feeCurrency: 'EUR' as const, includedUsageNanos: 60 * USD, overageMarkupBps: 13_000 },
];

// callsPerDay: conversas com o agente por dia. waPrefix: DDI do paciente fictício (define a tarifa da Meta).
const clinics = [
  { orgId: 'demo-sorriso-pinheiros', planId: 'demo-essencial', callsPerDay: 160, waPrefix: '55' },
  { orgId: 'demo-odonto-vila-mariana', planId: 'demo-essencial', callsPerDay: 90, waPrefix: '55' },
  { orgId: 'demo-bem-estar-campinas', planId: 'demo-profissional', callsPerDay: 290, waPrefix: '55' },
  { orgId: 'demo-dental-retiro', planId: 'demo-profissional', callsPerDay: 380, waPrefix: '34' },
  { orgId: 'demo-psicologia-ruzafa', planId: 'demo-essencial', callsPerDay: 50, waPrefix: '34' },
  { orgId: 'demo-odonto-jardins', planId: null, callsPerDay: 15, waPrefix: '55' },
];

// Gerador pseudoaleatório fixo: o seed sempre produz os mesmos números.
let state = 42;
const random = () => {
  state = (state * 1_664_525 + 1_013_904_223) % 2 ** 32;
  return state / 2 ** 32;
};
const around = (base: number) => Math.round(base * (0.7 + random() * 0.6));
const WEEKDAY_LOAD = [0.2, 1, 1.1, 1, 1.15, 0.95, 0.45]; // domingo a sábado

const database = createDb(config.DATABASE_URL);
const { db } = database;

await db.delete(usageEvents).where(like(usageEvents.ref, 'seed:%'));
await db.delete(orgBilling).where(like(orgBilling.orgId, 'demo-%'));
await db.delete(billingPlans).where(inArray(billingPlans.id, plans.map((p) => p.id)));

await db.insert(billingPlans).values(plans);
await db.insert(orgBilling).values(
  clinics.flatMap((c) => (c.planId ? [{ orgId: c.orgId, planId: c.planId }] : [])),
);

const now = new Date();
const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
const rows: (typeof usageEvents.$inferInsert)[] = [];
let seq = 0;

for (let day = new Date(start); day <= now; day = new Date(day.getTime() + 86_400_000)) {
  const load = WEEKDAY_LOAD[day.getUTCDay()] ?? 1;
  for (const clinic of clinics) {
    const calls = around(clinic.callsPerDay * load);
    const at = (i: number) => new Date(day.getTime() + 8 * 3_600_000 + (i / Math.max(calls, 1)) * 11 * 3_600_000);

    for (let i = 0; i < calls; i++) {
      // Agente: a primeira chamada do dia escreve o cache; as outras leem.
      const agent = {
        input_tokens: around(1200),
        output_tokens: around(180),
        cache_read_input_tokens: i === 0 ? 0 : around(6000),
        cache_creation_input_tokens: i === 0 ? 6000 : 0,
      };
      rows.push({
        orgId: clinic.orgId, occurredAt: at(i), provider: 'anthropic', kind: 'llm_call', item: 'claude-sonnet-5-5',
        quantity: { input: agent.input_tokens, output: agent.output_tokens, cacheRead: agent.cache_read_input_tokens, cacheWrite: agent.cache_creation_input_tokens },
        costNanos: llmCostNanos('claude-sonnet-5-5', agent), priceVersion: PRICE_BOOK_VERSION, ref: `seed:${seq++}`,
      });
      const triage = { input_tokens: around(400), output_tokens: around(20) };
      rows.push({
        orgId: clinic.orgId, occurredAt: at(i), provider: 'anthropic', kind: 'llm_call', item: 'claude-haiku-4-5',
        quantity: { input: triage.input_tokens, output: triage.output_tokens, cacheRead: 0, cacheWrite: 0 },
        costNanos: llmCostNanos('claude-haiku-4-5', triage), priceVersion: PRICE_BOOK_VERSION, ref: `seed:${seq++}`,
      });
    }

    // WhatsApp: respostas na janela de 24 h (grátis), lembretes (utility) e um pouco de marketing.
    const messages: [string, string, number][] = [
      ['service', 'free_customer_service', Math.round(calls * 0.6)],
      ['utility', 'regular', Math.round(calls * 0.15)],
      ['marketing', 'regular', random() < 0.2 ? around(8) : 0],
    ];
    for (const [category, type, count] of messages) {
      for (let i = 0; i < count; i++) {
        const waId = `${clinic.waPrefix}000000000`;
        rows.push({
          orgId: clinic.orgId, occurredAt: at(i), provider: 'meta', kind: 'whatsapp_message', item: category,
          quantity: { messages: 1, type, country: clinic.waPrefix === '55' ? 'BR' : 'ES' },
          costNanos: whatsappCostNanos(waId, category, type), priceVersion: PRICE_BOOK_VERSION, ref: `seed:${seq++}`,
        });
      }
    }
  }
}

for (let i = 0; i < rows.length; i += 1000) {
  await db.insert(usageEvents).values(rows.slice(i, i + 1000));
}
await database.close();
console.log(`Seed de demonstração: ${clinics.length} clínicas, ${rows.length} lançamentos.`);
