import Fastify, { type FastifyServerOptions } from 'fastify';
import { adminUsage, type AdminUsageOptions } from './routes/admin-usage.ts';
import { whatsappWebhook, type WhatsAppWebhookOptions } from './routes/whatsapp-webhook.ts';

export interface AppDeps {
  logger: FastifyServerOptions['logger'];
  ping: () => Promise<void>;
  whatsapp: WhatsAppWebhookOptions;
  usage: AdminUsageOptions;
}

export function buildApp(deps: AppDeps) {
  const app = Fastify({ logger: deps.logger });

  // Vivo: o processo responde. Pronto: também alcança o banco.
  app.get('/health', async () => ({ status: 'ok' }));
  app.get('/health/ready', async (_request, reply) => {
    try {
      await deps.ping();
      return { status: 'ok' };
    } catch (error) {
      app.log.error({ err: error }, 'banco indisponível');
      return reply.code(503).send({ status: 'unavailable' });
    }
  });

  app.register(whatsappWebhook, { prefix: '/webhooks/whatsapp', ...deps.whatsapp });
  app.register(adminUsage, { prefix: '/admin/usage', ...deps.usage });

  return app;
}
