import type { Database } from '../db/client.ts';
import { whatsappEvents } from '../db/schema.ts';
import { encrypt } from '../lib/crypto.ts';
import type { WebhookEvent } from './webhook-payload.ts';

export interface EventStore {
  /** Grava os eventos ignorando os repetidos. Devolve só os que eram novos. */
  saveNew(events: WebhookEvent[]): Promise<WebhookEvent[]>;
}

export function createEventStore(database: Database, encryptionKey: Buffer): EventStore {
  return {
    async saveNew(events) {
      if (events.length === 0) return [];
      const inserted = await database.db
        .insert(whatsappEvents)
        .values(
          events.map((event) => ({
            eventKey: event.key,
            kind: event.kind,
            phoneNumberId: event.phoneNumberId,
            payload: encrypt(JSON.stringify(event.kind === 'message' ? event.message : event.status), encryptionKey),
          })),
        )
        .onConflictDoNothing({ target: whatsappEvents.eventKey })
        .returning({ eventKey: whatsappEvents.eventKey });
      const fresh = new Set(inserted.map((row) => row.eventKey));
      return events.filter((event) => fresh.has(event.key));
    },
  };
}
