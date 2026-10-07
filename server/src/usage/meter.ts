import type { Database } from '../db/client.ts';
import { usageEvents } from '../db/schema.ts';
import { countryFromWaId, META_RATES, MODEL_PRICES, PRICE_BOOK_VERSION } from './prices.ts';

// Mesmo formato do `usage` das respostas do SDK da Anthropic (compatível por estrutura).
export interface LlmUsage {
  input_tokens: number;
  output_tokens: number;
  cache_read_input_tokens?: number | null;
  cache_creation_input_tokens?: number | null;
  cache_creation?: { ephemeral_5m_input_tokens?: number; ephemeral_1h_input_tokens?: number } | null;
}

export function llmCostNanos(model: string, usage: LlmUsage): number | null {
  const price = MODEL_PRICES[model];
  if (!price) return null;
  const write1h = usage.cache_creation?.ephemeral_1h_input_tokens ?? 0;
  const write5m = usage.cache_creation?.ephemeral_5m_input_tokens ?? (usage.cache_creation_input_tokens ?? 0) - write1h;
  return (
    usage.input_tokens * price.input +
    usage.output_tokens * price.output +
    (usage.cache_read_input_tokens ?? 0) * price.cacheRead +
    write5m * price.cacheWrite5m +
    write1h * price.cacheWrite1h
  );
}

// `type` e `category` vêm de `statuses[].pricing` no webhook da Meta.
export function whatsappCostNanos(recipientWaId: string, category: string, type: string): number | null {
  if (type !== 'regular') return 0; // janela de atendimento ou ponto de entrada gratuito
  const country = countryFromWaId(recipientWaId);
  return (country && META_RATES[country]?.[category]) ?? null;
}

export interface UsageMeter {
  recordLlmCall(entry: {
    orgId: string;
    unitId?: string;
    provider: 'anthropic' | 'vertex';
    model: string;
    usage: LlmUsage;
    ref: string;
  }): Promise<void>;
  recordWhatsAppMessage(entry: {
    orgId: string;
    unitId?: string;
    wamid: string;
    recipientWaId: string;
    category: string;
    type: string;
  }): Promise<void>;
}

export function createUsageMeter(database: Database): UsageMeter {
  const insert = (values: typeof usageEvents.$inferInsert) =>
    database.db.insert(usageEvents).values(values).onConflictDoNothing({ target: usageEvents.ref });

  return {
    async recordLlmCall({ orgId, unitId, provider, model, usage, ref }) {
      await insert({
        orgId,
        unitId,
        provider,
        kind: 'llm_call',
        item: model,
        quantity: {
          input: usage.input_tokens,
          output: usage.output_tokens,
          cacheRead: usage.cache_read_input_tokens ?? 0,
          cacheWrite: usage.cache_creation_input_tokens ?? 0,
        },
        costNanos: llmCostNanos(model, usage),
        priceVersion: PRICE_BOOK_VERSION,
        ref: `llm:${ref}`,
      });
    },
    async recordWhatsAppMessage({ orgId, unitId, wamid, recipientWaId, category, type }) {
      await insert({
        orgId,
        unitId,
        provider: 'meta',
        kind: 'whatsapp_message',
        item: category,
        quantity: { messages: 1, type, country: countryFromWaId(recipientWaId) ?? 'outro' },
        costNanos: whatsappCostNanos(recipientWaId, category, type),
        priceVersion: PRICE_BOOK_VERSION,
        ref: `wa:${wamid}`,
      });
    },
  };
}
