import { buildApp } from './app.ts';
import { loadConfig } from './config.ts';
import { createDb } from './db/client.ts';
import { dailyCost, monthlyUsage } from './usage/report.ts';
import { createWhatsAppClient } from './whatsapp/client.ts';
import { createEventStore } from './whatsapp/event-store.ts';

const config = loadConfig();
const database = createDb(config.DATABASE_URL);

const app = buildApp({
  logger: {
    level: config.LOG_LEVEL,
    // Nada de token nem assinatura em log. Corpo de requisição não é logado por padrão.
    redact: ['req.headers.authorization', 'req.headers["x-hub-signature-256"]'],
  },
  ping: database.ping,
  whatsapp: {
    appSecret: config.WHATSAPP_APP_SECRET,
    verifyToken: config.WHATSAPP_VERIFY_TOKEN,
    devEcho: config.NODE_ENV === 'development' && config.WHATSAPP_DEV_ECHO,
    eventStore: createEventStore(database, Buffer.from(config.ENCRYPTION_KEY, 'base64')),
    whatsapp: createWhatsAppClient({
      accessToken: config.WHATSAPP_ACCESS_TOKEN,
      graphVersion: config.WHATSAPP_GRAPH_VERSION,
    }),
  },
  usage: {
    adminToken: config.FORGEON_ADMIN_TOKEN,
    report: (month, orgId) => monthlyUsage(database, month, orgId),
    daily: (month, orgId) => dailyCost(database, month, orgId),
  },
});

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.once(signal, async () => {
    await app.close();
    await database.close();
    process.exit(0);
  });
}

await app.listen({ host: config.HOST, port: config.PORT });
