import { createHmac, randomBytes } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { buildApp } from '../src/app.ts';
import { decrypt, encrypt } from '../src/lib/crypto.ts';
import type { EventStore } from '../src/whatsapp/event-store.ts';
import type { WebhookEvent } from '../src/whatsapp/webhook-payload.ts';

// Valores fictícios. Nenhum dado real de paciente.
const APP_SECRET = 'test-app-secret';
const VERIFY_TOKEN = 'test-verify-token';

function memoryStore(): EventStore & { saved: WebhookEvent[] } {
  const keys = new Set<string>();
  const saved: WebhookEvent[] = [];
  return {
    saved,
    async saveNew(events) {
      const fresh = events.filter((event) => !keys.has(event.key));
      for (const event of fresh) {
        keys.add(event.key);
        saved.push(event);
      }
      return fresh;
    },
  };
}

function setup() {
  const store = memoryStore();
  const sent: { to: string; body: string }[] = [];
  const app = buildApp({
    logger: false,
    ping: async () => {},
    whatsapp: {
      appSecret: APP_SECRET,
      verifyToken: VERIFY_TOKEN,
      devEcho: true,
      eventStore: store,
      whatsapp: {
        async sendText(_phoneNumberId, to, body) {
          sent.push({ to, body });
          return 'wamid.OUT';
        },
      },
    },
    usage: { adminToken: 'x'.repeat(32), report: async () => [], daily: async () => [] },
  });
  return { app, store, sent };
}

function sign(body: string, secret = APP_SECRET) {
  return `sha256=${createHmac('sha256', secret).update(body).digest('hex')}`;
}

const inbound = JSON.stringify({
  object: 'whatsapp_business_account',
  entry: [
    {
      id: 'WABA_FAKE',
      changes: [
        {
          field: 'messages',
          value: {
            messaging_product: 'whatsapp',
            metadata: { display_phone_number: '15550000000', phone_number_id: 'PNID_FAKE' },
            messages: [{ id: 'wamid.FAKE1', from: '5500000000000', timestamp: '1791400000', type: 'text', text: { body: 'Olá' } }],
            statuses: [{ id: 'wamid.FAKE0', status: 'delivered', timestamp: '1791400001', recipient_id: '5500000000000' }],
          },
        },
      ],
    },
  ],
});

describe('GET /webhooks/whatsapp (verificação da Meta)', () => {
  it('devolve o challenge quando o token confere', async () => {
    const { app } = setup();
    const res = await app.inject({
      url: '/webhooks/whatsapp',
      query: { 'hub.mode': 'subscribe', 'hub.verify_token': VERIFY_TOKEN, 'hub.challenge': '12345' },
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe('12345');
  });

  it('recusa token errado', async () => {
    const { app } = setup();
    const res = await app.inject({
      url: '/webhooks/whatsapp',
      query: { 'hub.mode': 'subscribe', 'hub.verify_token': 'errado', 'hub.challenge': '12345' },
    });
    expect(res.statusCode).toBe(403);
  });
});

describe('POST /webhooks/whatsapp', () => {
  it('recusa assinatura inválida sem gravar nada', async () => {
    const { app, store } = setup();
    const res = await app.inject({
      method: 'POST',
      url: '/webhooks/whatsapp',
      headers: { 'content-type': 'application/json', 'x-hub-signature-256': sign(inbound, 'outro-segredo') },
      payload: inbound,
    });
    expect(res.statusCode).toBe(401);
    expect(store.saved).toHaveLength(0);
  });

  it('grava mensagem e status, e ignora a mesma notificação repetida', async () => {
    const { app, store, sent } = setup();
    const send = () =>
      app.inject({
        method: 'POST',
        url: '/webhooks/whatsapp',
        headers: { 'content-type': 'application/json', 'x-hub-signature-256': sign(inbound) },
        payload: inbound,
      });

    expect((await send()).statusCode).toBe(200);
    expect((await send()).statusCode).toBe(200);

    expect(store.saved.map((e) => e.key)).toEqual(['message:wamid.FAKE1', 'status:wamid.FAKE0:delivered']);
    expect(sent).toEqual([{ to: '5500000000000', body: 'Eco: Olá' }]);
  });
});

describe('cifragem', () => {
  it('ida e volta com AES-256-GCM', () => {
    const key = randomBytes(32);
    expect(decrypt(encrypt('conteúdo sensível', key), key)).toBe('conteúdo sensível');
  });

  it('falha com chave errada', () => {
    const sealed = encrypt('conteúdo sensível', randomBytes(32));
    expect(() => decrypt(sealed, randomBytes(32))).toThrow();
  });
});

describe('health', () => {
  it('responde ok', async () => {
    const { app } = setup();
    const res = await app.inject({ url: '/health' });
    expect(res.json()).toEqual({ status: 'ok' });
  });
});
