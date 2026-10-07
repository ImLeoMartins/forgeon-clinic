import { z } from 'zod';

// Só os campos que usamos. O resto do payload da Meta passa adiante sem validação.
const InboundMessage = z.looseObject({
  id: z.string(),
  from: z.string(),
  timestamp: z.string(),
  type: z.string(),
  text: z.object({ body: z.string() }).optional(),
});

const StatusUpdate = z.looseObject({
  id: z.string(),
  status: z.string(),
  timestamp: z.string(),
  recipient_id: z.string(),
  // Cobrança por mensagem: `type` diz se é cobrada (`regular`) e `category` define a tarifa.
  pricing: z.looseObject({ category: z.string(), type: z.string().optional() }).optional(),
});

const ChangeValue = z.looseObject({
  metadata: z.object({ phone_number_id: z.string(), display_phone_number: z.string() }),
  messages: z.array(InboundMessage).optional(),
  statuses: z.array(StatusUpdate).optional(),
});

export const WebhookPayload = z.object({
  object: z.literal('whatsapp_business_account'),
  entry: z.array(
    z.object({
      id: z.string(),
      changes: z.array(z.object({ field: z.string(), value: z.unknown() })),
    }),
  ),
});

export type InboundMessage = z.infer<typeof InboundMessage>;
export type StatusUpdate = z.infer<typeof StatusUpdate>;

export type WebhookEvent =
  | { key: string; kind: 'message'; phoneNumberId: string; message: InboundMessage }
  | { key: string; kind: 'status'; phoneNumberId: string; status: StatusUpdate };

export function extractEvents(payload: z.infer<typeof WebhookPayload>): WebhookEvent[] {
  const events: WebhookEvent[] = [];
  for (const entry of payload.entry) {
    for (const change of entry.changes) {
      if (change.field !== 'messages') continue;
      const value = ChangeValue.safeParse(change.value);
      if (!value.success) continue;
      const phoneNumberId = value.data.metadata.phone_number_id;
      for (const message of value.data.messages ?? []) {
        events.push({ key: `message:${message.id}`, kind: 'message', phoneNumberId, message });
      }
      for (const status of value.data.statuses ?? []) {
        events.push({ key: `status:${status.id}:${status.status}`, kind: 'status', phoneNumberId, status });
      }
    }
  }
  return events;
}
