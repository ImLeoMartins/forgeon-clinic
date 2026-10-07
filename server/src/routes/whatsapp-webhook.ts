import type { FastifyPluginAsync } from 'fastify';
import type { EventStore } from '../whatsapp/event-store.ts';
import type { WhatsAppClient } from '../whatsapp/client.ts';
import { isValidSignature } from '../whatsapp/signature.ts';
import { extractEvents, WebhookPayload } from '../whatsapp/webhook-payload.ts';

export interface WhatsAppWebhookOptions {
  appSecret: string;
  verifyToken: string;
  devEcho: boolean;
  eventStore: EventStore;
  whatsapp: WhatsAppClient;
}

export const whatsappWebhook: FastifyPluginAsync<WhatsAppWebhookOptions> = async (app, options) => {
  // A assinatura é calculada sobre o corpo cru, então este plugin recebe o JSON como Buffer.
  app.addContentTypeParser('application/json', { parseAs: 'buffer' }, (_request, body, done) => done(null, body));

  // Verificação feita pela Meta ao cadastrar a URL do webhook no painel do app.
  app.get<{ Querystring: Record<string, string | undefined> }>('/', async (request, reply) => {
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = request.query;
    if (mode === 'subscribe' && token === options.verifyToken && challenge) {
      return reply.type('text/plain').send(challenge);
    }
    return reply.code(403).send();
  });

  app.post('/', async (request, reply) => {
    const raw = request.body as Buffer;
    if (!isValidSignature(raw, request.headers['x-hub-signature-256'] as string | undefined, options.appSecret)) {
      request.log.warn('webhook do WhatsApp com assinatura inválida');
      return reply.code(401).send();
    }

    let json: unknown;
    try {
      json = JSON.parse(raw.toString('utf8'));
    } catch {
      return reply.code(400).send();
    }
    const payload = WebhookPayload.safeParse(json);
    if (!payload.success) {
      // Formato que não conhecemos: confirma para a Meta não reenviar, mas registra.
      request.log.warn('payload do WhatsApp em formato inesperado');
      return reply.code(200).send();
    }

    const fresh = await options.eventStore.saveNew(extractEvents(payload.data));
    request.log.info({ received: fresh.length }, 'eventos do WhatsApp gravados');

    if (options.devEcho) {
      for (const event of fresh) {
        if (event.kind !== 'message' || !event.message.text) continue;
        options.whatsapp
          .sendText(event.phoneNumberId, event.message.from, `Eco: ${event.message.text.body}`)
          .catch((error: unknown) => request.log.error({ err: error }, 'falha ao enviar eco'));
      }
    }

    return reply.code(200).send();
  });
};
