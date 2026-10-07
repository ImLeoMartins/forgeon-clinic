// Tabela de preços usada pelo auditor. Valores em nano-dólares (1e-9 USD).
// Mudou um preço? Atualize o valor e a versão: cada lançamento guarda a versão com que foi calculado.
export const PRICE_BOOK_VERSION = '2026-10-07';

export interface ModelPrice {
  input: number;
  output: number;
  cacheRead: number;
  cacheWrite5m: number;
  cacheWrite1h: number;
}

// Por token. Fonte: tabela de preços da Anthropic (API direta). Escrita em cache: 1,25× a entrada
// (5 min) e 2× (1 h). No Vertex AI o preço é do Google e pode ter acréscimo regional: conferir
// na fatura do Google Cloud antes de usar a mesma tabela em produção.
export const MODEL_PRICES: Record<string, ModelPrice> = {
  'claude-sonnet-5-5': { input: 2_000, output: 10_000, cacheRead: 200, cacheWrite5m: 2_500, cacheWrite1h: 4_000 },
  'claude-haiku-4-5': { input: 1_000, output: 5_000, cacheRead: 100, cacheWrite5m: 1_250, cacheWrite1h: 2_000 },
  'claude-opus-5-5': { input: 4_000, output: 20_000, cacheRead: 200, cacheWrite5m: 5_000, cacheWrite1h: 8_000 },
};

export type Country = 'BR' | 'ES';

// Por mensagem cobrada, por país do destinatário e categoria (`pricing.category` do webhook).
// Preencher com a tabela oficial da Meta, que muda por trimestre. Sem tarifa, o custo fica pendente.
export const META_RATES: Partial<Record<Country, Partial<Record<string, number>>>> = {};

export function countryFromWaId(waId: string): Country | null {
  if (waId.startsWith('55')) return 'BR';
  if (waId.startsWith('34')) return 'ES';
  return null;
}
