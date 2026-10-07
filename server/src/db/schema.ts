import { bigint, customType, index, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

const bytea = customType<{ data: Buffer; driverData: Buffer }>({
  dataType: () => 'bytea',
});

// Eventos brutos do webhook do WhatsApp. A chave do evento garante que a mesma
// notificação da Meta (que pode chegar repetida) seja gravada uma vez só.
export const whatsappEvents = pgTable('whatsapp_events', {
  id: uuid('id').primaryKey().defaultRandom(),
  eventKey: text('event_key').notNull().unique(),
  kind: text('kind', { enum: ['message', 'status'] }).notNull(),
  phoneNumberId: text('phone_number_id').notNull(),
  // JSON do evento, cifrado: contém telefone e conteúdo da mensagem do paciente.
  payload: bytea('payload').notNull(),
  receivedAt: timestamp('received_at', { withTimezone: true }).notNull().defaultNow(),
  processedAt: timestamp('processed_at', { withTimezone: true }),
});

// Auditor de uso: livro-razão só de inserção com cada custo que uma clínica gera para a Forgeon.
// Custos em nano-dólares (1e-9 USD) para ficar em inteiros mesmo com preço de cache por token.
// `org_id` ganha chave estrangeira quando a tabela de clínicas existir (etapa 3).
export const usageEvents = pgTable(
  'usage_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    orgId: text('org_id').notNull(),
    unitId: text('unit_id'),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull().defaultNow(),
    provider: text('provider', { enum: ['anthropic', 'vertex', 'meta'] }).notNull(),
    kind: text('kind', { enum: ['llm_call', 'whatsapp_message'] }).notNull(),
    // Modelo de IA ou categoria da mensagem na Meta.
    item: text('item').notNull(),
    quantity: jsonb('quantity').$type<Record<string, number | string>>().notNull(),
    // Vazio quando ainda não há tarifa cadastrada para o item: o evento fica pendente de preço.
    costNanos: bigint('cost_nanos', { mode: 'number' }),
    priceVersion: text('price_version').notNull(),
    // Identificador externo (id da mensagem na Meta, id da resposta da IA). Evita lançamento duplicado.
    ref: text('ref').unique(),
  },
  (table) => [index('usage_events_org_time_idx').on(table.orgId, table.occurredAt)],
);

// Planos: mensalidade, franquia de uso incluída e markup do excedente repassado.
export const billingPlans = pgTable('billing_plans', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  monthlyFeeCents: integer('monthly_fee_cents').notNull(),
  feeCurrency: text('fee_currency', { enum: ['BRL', 'EUR'] }).notNull(),
  includedUsageNanos: bigint('included_usage_nanos', { mode: 'number' }).notNull(),
  // 10000 = repasse a preço de custo; 13000 = custo + 30%.
  overageMarkupBps: integer('overage_markup_bps').notNull().default(10000),
});

export const orgBilling = pgTable('org_billing', {
  orgId: text('org_id').primaryKey(),
  planId: text('plan_id')
    .notNull()
    .references(() => billingPlans.id),
  // Franquia negociada só para esta clínica, no lugar da do plano.
  includedUsageNanosOverride: bigint('included_usage_nanos_override', { mode: 'number' }),
});
