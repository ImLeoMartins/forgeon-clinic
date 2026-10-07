import { createHash, timingSafeEqual } from 'node:crypto';
import type { FastifyPluginAsync } from 'fastify';
import type { DailyCost, OrgMonthlyUsage } from '../usage/report.ts';

export interface AdminUsageOptions {
  // Provisório até o login da equipe Forgeon (etapa 3): token fixo no cabeçalho Authorization.
  adminToken: string;
  report: (month: string, orgId?: string) => Promise<OrgMonthlyUsage[]>;
  daily: (month: string, orgId: string) => Promise<DailyCost[]>;
}

const MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

function sameToken(given: string, expected: string) {
  const digest = (value: string) => createHash('sha256').update(value).digest();
  return timingSafeEqual(digest(given), digest(expected));
}

const usd = (nanos: number) => (nanos / 1e9).toFixed(4);

function present(usage: OrgMonthlyUsage) {
  return {
    ...usage,
    usd: {
      total: usd(usage.totalCostNanos),
      included: usd(usage.includedNanos),
      overageCost: usd(usage.overageCostNanos),
      overageCharge: usd(usage.overageChargeNanos),
    },
  };
}

export const adminUsage: FastifyPluginAsync<AdminUsageOptions> = async (app, options) => {
  app.addHook('onRequest', async (request, reply) => {
    const header = request.headers.authorization ?? '';
    if (!header.startsWith('Bearer ') || !sameToken(header.slice('Bearer '.length), options.adminToken)) {
      return reply.code(401).send();
    }
  });

  const monthOf = (query: { month?: string }) => query.month ?? new Date().toISOString().slice(0, 7);

  app.get<{ Querystring: { month?: string } }>('/', async (request, reply) => {
    const month = monthOf(request.query);
    if (!MONTH.test(month)) return reply.code(400).send({ error: 'month deve ser AAAA-MM' });
    const all = await options.report(month);
    return { month, clinics: all.map(present) };
  });

  app.get<{ Params: { orgId: string }; Querystring: { month?: string } }>('/:orgId', async (request, reply) => {
    const month = monthOf(request.query);
    if (!MONTH.test(month)) return reply.code(400).send({ error: 'month deve ser AAAA-MM' });
    const [usage] = await options.report(month, request.params.orgId);
    if (!usage) return reply.code(404).send({ error: 'sem uso registrado neste mês' });
    return { ...present(usage), daily: await options.daily(month, request.params.orgId) };
  });
};
