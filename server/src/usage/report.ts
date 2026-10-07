import { and, eq, gte, lt, sql } from 'drizzle-orm';
import type { Database } from '../db/client.ts';
import { billingPlans, orgBilling, usageEvents } from '../db/schema.ts';

export interface UsageLine {
  provider: string;
  kind: string;
  item: string;
  events: number;
  costNanos: number;
  pendingPrice: number;
  /** Só chamadas à IA: somas de tokens, para medir o aproveitamento do cache. */
  inputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
}

export interface DailyCost {
  day: string;
  costNanos: number;
}

export interface OrgMonthlyUsage {
  orgId: string;
  month: string;
  planId: string | null;
  totalCostNanos: number;
  includedNanos: number;
  /** Custo acima da franquia. */
  overageCostNanos: number;
  /** Valor a repassar: excedente com o markup do plano. */
  overageChargeNanos: number;
  /** Eventos sem tarifa cadastrada: o total está subestimado enquanto for maior que zero. */
  pendingPriceEvents: number;
  lines: UsageLine[];
}

export function computeOverage(totalCostNanos: number, includedNanos: number, markupBps: number) {
  const overageCostNanos = Math.max(0, totalCostNanos - includedNanos);
  return { overageCostNanos, overageChargeNanos: Math.round((overageCostNanos * markupBps) / 10_000) };
}

/** Mês no formato AAAA-MM, em UTC. */
export function monthRange(month: string): { start: Date; end: Date } {
  const [year, mon] = month.split('-').map(Number) as [number, number];
  return { start: new Date(Date.UTC(year, mon - 1, 1)), end: new Date(Date.UTC(year, mon, 1)) };
}

/** Custo por dia (UTC) de uma clínica no mês, para o gráfico do auditor. */
export async function dailyCost(database: Database, month: string, orgId: string): Promise<DailyCost[]> {
  const { start, end } = monthRange(month);
  const day = sql<string>`to_char(${usageEvents.occurredAt} at time zone 'UTC', 'YYYY-MM-DD')`;
  const rows = await database.db
    .select({ day, costNanos: sql<string>`coalesce(sum(${usageEvents.costNanos}), 0)` })
    .from(usageEvents)
    .where(and(eq(usageEvents.orgId, orgId), gte(usageEvents.occurredAt, start), lt(usageEvents.occurredAt, end)))
    .groupBy(day)
    .orderBy(day);
  return rows.map((row) => ({ day: row.day, costNanos: Number(row.costNanos) }));
}

export async function monthlyUsage(database: Database, month: string, orgId?: string): Promise<OrgMonthlyUsage[]> {
  const { start, end } = monthRange(month);
  const { db } = database;

  const rows = await db
    .select({
      orgId: usageEvents.orgId,
      provider: usageEvents.provider,
      kind: usageEvents.kind,
      item: usageEvents.item,
      events: sql<string>`count(*)`,
      costNanos: sql<string>`coalesce(sum(${usageEvents.costNanos}), 0)`,
      pendingPrice: sql<string>`count(*) filter (where ${usageEvents.costNanos} is null)`,
      inputTokens: sql<string>`coalesce(sum((${usageEvents.quantity}->>'input')::bigint), 0)`,
      cacheReadTokens: sql<string>`coalesce(sum((${usageEvents.quantity}->>'cacheRead')::bigint), 0)`,
      cacheWriteTokens: sql<string>`coalesce(sum((${usageEvents.quantity}->>'cacheWrite')::bigint), 0)`,
    })
    .from(usageEvents)
    .where(
      and(
        gte(usageEvents.occurredAt, start),
        lt(usageEvents.occurredAt, end),
        orgId ? eq(usageEvents.orgId, orgId) : undefined,
      ),
    )
    .groupBy(usageEvents.orgId, usageEvents.provider, usageEvents.kind, usageEvents.item);

  const plans = await db
    .select({
      orgId: orgBilling.orgId,
      planId: billingPlans.id,
      included: sql<number>`coalesce(${orgBilling.includedUsageNanosOverride}, ${billingPlans.includedUsageNanos})`.mapWith(Number),
      markupBps: billingPlans.overageMarkupBps,
    })
    .from(orgBilling)
    .innerJoin(billingPlans, eq(orgBilling.planId, billingPlans.id))
    .where(orgId ? eq(orgBilling.orgId, orgId) : undefined);
  const planByOrg = new Map(plans.map((p) => [p.orgId, p]));

  const byOrg = new Map<string, UsageLine[]>();
  for (const row of rows) {
    const lines = byOrg.get(row.orgId) ?? [];
    lines.push({
      provider: row.provider,
      kind: row.kind,
      item: row.item,
      events: Number(row.events),
      costNanos: Number(row.costNanos),
      pendingPrice: Number(row.pendingPrice),
      inputTokens: Number(row.inputTokens),
      cacheReadTokens: Number(row.cacheReadTokens),
      cacheWriteTokens: Number(row.cacheWriteTokens),
    });
    byOrg.set(row.orgId, lines);
  }

  return [...byOrg].map(([org, lines]) => {
    const plan = planByOrg.get(org);
    const totalCostNanos = lines.reduce((sum, line) => sum + line.costNanos, 0);
    // Clínica sem plano: tudo é excedente a custo, para aparecer no relatório e alguém corrigir.
    const includedNanos = plan?.included ?? 0;
    return {
      orgId: org,
      month,
      planId: plan?.planId ?? null,
      totalCostNanos,
      includedNanos,
      ...computeOverage(totalCostNanos, includedNanos, plan?.markupBps ?? 10_000),
      pendingPriceEvents: lines.reduce((sum, line) => sum + line.pendingPrice, 0),
      lines,
    };
  });
}
