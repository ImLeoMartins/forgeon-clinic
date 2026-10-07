import React from 'react';
import { Badge, Button, Card, Icon, Input, KpiCard, Select, Tabs, type BadgeTone } from '@ds';

// Auditor de uso da Forgeon: custo que cada clínica gera (IA + WhatsApp), franquia e excedente a repassar.
// Fala com GET /admin/usage da API. Acesso provisório por token até existir o login da equipe (etapa 3).

interface UsageLine {
  provider: string;
  kind: string;
  item: string;
  events: number;
  costNanos: number;
  pendingPrice: number;
  inputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
}

interface ClinicUsage {
  orgId: string;
  planId: string | null;
  totalCostNanos: number;
  includedNanos: number;
  overageCostNanos: number;
  overageChargeNanos: number;
  pendingPriceEvents: number;
  lines: UsageLine[];
}

interface ClinicDetail extends ClinicUsage {
  daily: { day: string; costNanos: number }[];
}

type Situation = 'over' | 'near' | 'ok' | 'noplan';
type Filter = 'all' | Situation;

const TOKEN_KEY = 'forgeon-admin-token';
const NANOS = 1_000_000_000;

const SITUATION: Record<Situation, { label: string; tone: BadgeTone; bar: string }> = {
  over: { label: 'Acima da franquia', tone: 'danger', bar: 'var(--danger)' },
  near: { label: 'Perto do limite', tone: 'warning', bar: 'var(--warning)' },
  ok: { label: 'Dentro da franquia', tone: 'success', bar: 'var(--success)' },
  noplan: { label: 'Sem plano', tone: 'ai', bar: 'var(--ai-accent)' },
};

const LINE_TITLES: Record<string, string> = {
  'claude-sonnet-5-5': 'Agente de conversa',
  'claude-haiku-4-5': 'Triagem de segurança',
  'claude-opus-5-5': 'Agente (Opus)',
  utility: 'Lembretes e confirmações',
  marketing: 'Marketing',
  service: 'Atendimento na janela de 24 h',
  authentication: 'Autenticação',
};

const usdFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' });
const usd = (nanos: number) => usdFormat.format(nanos / NANOS);
const count = (n: number) => n.toLocaleString('pt-BR');

function situationOf(c: ClinicUsage): Situation {
  if (!c.planId) return 'noplan';
  if (c.totalCostNanos > c.includedNanos) return 'over';
  return c.totalCostNanos >= c.includedNanos * 0.8 ? 'near' : 'ok';
}

function sumBy(lines: UsageLine[], test: (l: UsageLine) => boolean) {
  return lines.filter(test).reduce((total, l) => total + l.costNanos, 0);
}
const isAi = (l: UsageLine) => l.kind === 'llm_call';
const isWa = (l: UsageLine) => l.kind === 'whatsapp_message';

function lastMonths(n: number) {
  const now = new Date();
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
    const value = d.toISOString().slice(0, 7);
    const label = d.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    return { value, label: i === 0 ? `${label} · parcial` : label };
  });
}

function readToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY) ?? '';
  } catch {
    return '';
  }
}

function saveToken(token: string) {
  try {
    if (token) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    // Sem armazenamento: o token vale só enquanto a página estiver aberta.
  }
}

class Unauthorized extends Error {}

async function api<T>(path: string, token: string): Promise<T> {
  const res = await fetch(path, { headers: { authorization: `Bearer ${token}` } });
  if (res.status === 401) throw new Unauthorized();
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as T;
}

function TokenGate({ onSubmit, error }: { onSubmit: (token: string) => void; error?: string }) {
  const [value, setValue] = React.useState('');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-6)' }}>
      <Card padding="lg" style={{ width: '100%', maxWidth: 420 }}>
        <form
          onSubmit={(e) => { e.preventDefault(); onSubmit(value.trim()); }}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3-size)', color: 'var(--text-strong)' }}>Auditor de uso</h1>
            <p style={{ margin: 0, fontSize: 'var(--text-sm-size)', color: 'var(--text-muted)' }}>Acesso da equipe Forgeon. Use o FORGEON_ADMIN_TOKEN do servidor.</p>
          </div>
          <Input id="admin-token" label="Token da Forgeon" type="password" value={value} onChange={(e) => setValue(e.target.value)} error={error} required />
          <Button type="submit" iconLeft="lock" fullWidth disabled={!value.trim()}>Entrar</Button>
        </form>
      </Card>
    </div>
  );
}

function UsageBar({ ratio, color }: { ratio: number; color: string }) {
  return (
    <div style={{ height: 8, background: 'var(--bg-sunken)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
      <div style={{ height: 8, width: `${Math.min(100, Math.round(ratio * 100))}%`, background: color, borderRadius: 'var(--radius-pill)' }} />
    </div>
  );
}

const ROW_COLUMNS = 'minmax(0,2.2fr) minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr) minmax(0,1.1fr)';
const mono: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums' };

function ClinicRow({ clinic, selected, onSelect }: { clinic: ClinicUsage; selected: boolean; onSelect: () => void }) {
  const situation = situationOf(clinic);
  const look = SITUATION[situation];
  const ratio = clinic.includedNanos > 0 ? clinic.totalCostNanos / clinic.includedNanos : 1;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: ROW_COLUMNS, gap: 'var(--space-3)', alignItems: 'center', padding: 'var(--space-3) var(--space-5)',
      borderBottom: 'var(--border-w) solid var(--border-subtle)', background: selected ? 'var(--surface-selected)' : 'transparent',
      borderLeft: `var(--border-w-strong) solid ${selected ? 'var(--accent-brand)' : 'transparent'}` }}>
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <button type="button" onClick={onSelect} aria-pressed={selected}
          style={{ all: 'unset', cursor: 'pointer', fontWeight: 600, color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {clinic.orgId}
        </button>
        <span style={{ fontSize: 'var(--text-xs-size)', color: 'var(--text-muted)' }}>{clinic.planId ?? 'sem plano'}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        <UsageBar ratio={ratio} color={look.bar} />
        <span style={{ ...mono, fontSize: 'var(--text-xs-size)', color: 'var(--text-muted)' }}>
          {usd(clinic.totalCostNanos)} de {clinic.planId ? usd(clinic.includedNanos) : '—'}
        </span>
      </div>
      <span style={{ ...mono, textAlign: 'right', color: 'var(--text-body)' }}>{usd(sumBy(clinic.lines, isAi))}</span>
      <span style={{ ...mono, textAlign: 'right', color: 'var(--text-body)' }}>{usd(sumBy(clinic.lines, isWa))}</span>
      <span style={{ ...mono, textAlign: 'right', fontWeight: 600, color: clinic.overageChargeNanos > 0 ? 'var(--text-link)' : 'var(--text-subtle)' }}>
        {clinic.overageChargeNanos > 0 ? usd(clinic.overageChargeNanos) : '—'}
      </span>
      <span><Badge tone={look.tone} size="sm">{look.label}</Badge></span>
    </div>
  );
}

function DailyChart({ detail, month }: { detail: ClinicDetail; month: string }) {
  const [year, mon] = month.split('-').map(Number) as [number, number];
  const daysInMonth = new Date(Date.UTC(year, mon, 0)).getUTCDate();
  const byDay = new Map(detail.daily.map((d) => [d.day, d.costNanos]));
  const keys = Array.from({ length: daysInMonth }, (_, i) => `${month}-${String(i + 1).padStart(2, '0')}`);
  const values = keys.map((key) => byDay.get(key) ?? 0);
  const running = values.reduce<number[]>((acc, v) => [...acc, (acc[acc.length - 1] ?? 0) + v], []);
  const bars = keys.map((key, i) => ({
    key,
    day: i + 1,
    value: values[i] ?? 0,
    past: detail.planId !== null && (running[i] ?? 0) > detail.includedNanos,
  }));
  const max = Math.max(1, ...bars.map((b) => b.value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span style={{ fontSize: 'var(--text-sm-size)', fontWeight: 600, color: 'var(--text-strong)' }}>Custo por dia</span>
      <div role="img" aria-label="Custo por dia no mês; barras vermelhas a partir do dia em que a franquia foi ultrapassada"
        style={{ height: 96, display: 'flex', alignItems: 'flex-end', gap: 3, borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
        {bars.map((b) => (
          <div key={b.key} title={`Dia ${b.day}: ${usd(b.value)}${b.past ? ' (acima da franquia)' : ''}`}
            style={{ flex: '1 1 0', height: Math.max(b.value > 0 ? 4 : 1, Math.round((b.value / max) * 92)),
              background: b.past ? 'var(--danger)' : 'var(--teal-400)', borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0' }} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs-size)', color: 'var(--text-subtle)' }}>
        <span>1º</span><span>15</span><span>{daysInMonth}</span>
      </div>
    </div>
  );
}

function ClinicDetailPanel({ detail, month }: { detail: ClinicDetail; month: string }) {
  const ai = detail.lines.filter(isAi);
  const input = ai.reduce((t, l) => t + l.inputTokens + l.cacheReadTokens + l.cacheWriteTokens, 0);
  const cacheHit = input > 0 ? ai.reduce((t, l) => t + l.cacheReadTokens, 0) / input : 0;
  const lines = [...detail.lines].sort((a, b) => b.costNanos - a.costNanos);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Card padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div>
            <span style={{ fontSize: 'var(--text-xs-size)', color: 'var(--text-muted)' }}>{detail.planId ?? 'sem plano'}</span>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4-size)', color: 'var(--text-strong)', overflowWrap: 'anywhere' }}>{detail.orgId}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-3)' }}>
            {[
              ['Custo', usd(detail.totalCostNanos), 'var(--text-strong)'],
              ['Franquia', detail.planId ? usd(detail.includedNanos) : '—', 'var(--text-strong)'],
              ['A repassar', detail.overageChargeNanos > 0 ? usd(detail.overageChargeNanos) : '—', 'var(--text-link)'],
            ].map(([label, value, color]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'var(--text-xs-size)', color: 'var(--text-muted)' }}>{label}</span>
                <span style={{ ...mono, fontSize: 'var(--text-md-size)', color }}>{value}</span>
              </div>
            ))}
          </div>
          <DailyChart detail={detail} month={month} />
        </div>
      </Card>

      <Card padding="md" title="De onde vem o custo">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {lines.map((l) => (
            <div key={`${l.provider}-${l.item}`} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{LINE_TITLES[l.item] ?? l.item}</span>
                <span style={{ fontSize: 'var(--text-xs-size)', color: 'var(--text-muted)' }}>
                  {l.provider} · {l.item} · {count(l.events)} {isAi(l) ? 'chamadas' : 'mensagens'}
                </span>
              </div>
              <span style={{ ...mono, whiteSpace: 'nowrap', color: l.pendingPrice > 0 ? 'var(--warning-text)' : l.costNanos === 0 ? 'var(--success-text)' : 'var(--text-body)' }}>
                {l.pendingPrice > 0 ? `${count(l.pendingPrice)} sem tarifa` : l.costNanos === 0 ? 'grátis' : usd(l.costNanos)}
              </span>
            </div>
          ))}
          {ai.length > 0 && (
            <div style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-3)', background: 'var(--ai-surface)', border: 'var(--border-w) solid var(--ai-border)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ color: 'var(--ai-accent-text)' }}><Icon name="zap" size={18} /></span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 'var(--text-sm-size)', fontWeight: 600, color: 'var(--ai-accent-text)' }}>{Math.round(cacheHit * 100)}% da entrada da IA veio do cache</span>
                <span style={{ fontSize: 'var(--text-xs-size)', color: 'var(--text-body)' }}>Entrada lida do cache custa 10% do preço normal.</span>
              </div>
            </div>
          )}
          {detail.pendingPriceEvents > 0 && (
            <div style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-3)', background: 'var(--warning-surface)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ color: 'var(--warning-text)' }}><Icon name="triangle-alert" size={18} /></span>
              <span style={{ fontSize: 'var(--text-sm-size)', color: 'var(--warning-text)' }}>
                {count(detail.pendingPriceEvents)} mensagens cobradas sem tarifa da Meta. O custo desta clínica está subestimado até a tarifa ser cadastrada.
              </span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export function UsageAuditor() {
  const months = React.useMemo(() => lastMonths(6), []);
  const [token, setToken] = React.useState(readToken);
  const [authError, setAuthError] = React.useState<string>();
  const [month, setMonth] = React.useState(months[0]?.value ?? '');
  const [filter, setFilter] = React.useState<Filter>('all');
  const [selected, setSelected] = React.useState<string>();
  // Cada resposta guarda a chave do pedido que a gerou: se a chave atual mudou, o dado é velho e a tela mostra "carregando".
  const [listState, setListState] = React.useState<{ key: string; clinics: ClinicUsage[] }>();
  const [detailState, setDetailState] = React.useState<{ key: string; detail: ClinicDetail }>();
  const [errorState, setErrorState] = React.useState<{ key: string; message: string }>();

  const listKey = `${token}|${month}`;
  const detailKey = `${listKey}|${selected ?? ''}`;
  const clinics = listState?.key === listKey ? listState.clinics : null;
  const detail = detailState?.key === detailKey ? detailState.detail : null;
  const error = errorState?.key === listKey ? errorState.message : undefined;

  const handleError = React.useCallback((key: string, e: unknown) => {
    if (e instanceof Unauthorized) {
      saveToken('');
      setToken('');
      setAuthError('Token recusado pela API.');
    } else {
      setErrorState({ key, message: 'Não foi possível falar com a API. Confira se o servidor está rodando (npm run dev:server).' });
    }
  }, []);

  React.useEffect(() => {
    if (!token) return;
    let active = true;
    api<{ clinics: ClinicUsage[] }>(`/admin/usage?month=${month}`, token)
      .then((data) => {
        if (!active) return;
        const sorted = [...data.clinics].sort((a, b) => b.overageChargeNanos - a.overageChargeNanos || b.totalCostNanos - a.totalCostNanos);
        setListState({ key: listKey, clinics: sorted });
        setSelected((current) => (current && sorted.some((c) => c.orgId === current) ? current : sorted[0]?.orgId));
      })
      .catch((e: unknown) => active && handleError(listKey, e));
    return () => { active = false; };
  }, [token, month, listKey, handleError]);

  React.useEffect(() => {
    if (!token || !selected) return;
    let active = true;
    api<ClinicDetail>(`/admin/usage/${encodeURIComponent(selected)}?month=${month}`, token)
      .then((data) => active && setDetailState({ key: detailKey, detail: data }))
      .catch((e: unknown) => active && handleError(listKey, e));
    return () => { active = false; };
  }, [token, month, selected, listKey, detailKey, handleError]);

  const shell = (children: React.ReactNode) => (
    <div data-theme="dark" style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-body)', fontFamily: 'var(--font-text)', fontSize: 'var(--text-ui-size)' }}>
      {children}
    </div>
  );

  if (!token) {
    return shell(<TokenGate error={authError} onSubmit={(t) => { saveToken(t); setAuthError(undefined); setToken(t); }} />);
  }

  const list = clinics ?? [];
  const counts: Record<Filter, number> = { all: list.length, over: 0, near: 0, ok: 0, noplan: 0 };
  for (const c of list) counts[situationOf(c)] += 1;
  const visible = filter === 'all' ? list : list.filter((c) => situationOf(c) === filter);
  const totals = {
    cost: list.reduce((t, c) => t + c.totalCostNanos, 0),
    ai: list.reduce((t, c) => t + sumBy(c.lines, isAi), 0),
    wa: list.reduce((t, c) => t + sumBy(c.lines, isWa), 0),
    charge: list.reduce((t, c) => t + c.overageChargeNanos, 0),
    pending: list.reduce((t, c) => t + c.pendingPriceEvents, 0),
  };

  return shell(
    <>
      <header style={{ background: 'var(--surface-card)', borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: 'var(--space-4) var(--space-6)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span style={{ color: 'var(--accent-brand)' }}><Icon name="chart-column" size={28} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg-size)', color: 'var(--text-strong)' }}>Auditor de uso</h1>
              <span style={{ fontSize: 'var(--text-xs-size)', color: 'var(--text-muted)' }}>Forgeon · operação interna</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'flex-end' }}>
            <Select id="month" label="Mês" options={months} value={month} onChange={(e) => setMonth(e.target.value)} size="sm" />
            <Button variant="ghost" size="sm" iconLeft="log-out" onClick={() => { saveToken(''); setToken(''); }}>Sair</Button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1360, margin: '0 auto', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        {error && <Card padding="md" style={{ borderColor: 'var(--danger-border)' }}><span style={{ color: 'var(--danger-text)' }}>{error}</span></Card>}

        <section aria-label="Resumo do mês" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))', gap: 'var(--space-4)' }}>
          <KpiCard label="Custo total gerado" value={usd(totals.cost)} hint={`IA ${usd(totals.ai)} · WhatsApp ${usd(totals.wa)}`} icon="chart-line" />
          <KpiCard label="Excedente a repassar" value={usd(totals.charge)} hint="já com o markup de cada plano" icon="trending-up" />
          <KpiCard label="Clínicas acima da franquia" value={`${counts.over} de ${counts.all}`} hint={`${counts.near} perto do limite (80% ou mais)`} icon="triangle-alert" />
          <KpiCard label="Eventos sem tarifa" value={count(totals.pending)} hint="custo subestimado até cadastrar a tarifa" icon="circle-alert" />
        </section>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
          <Card padding="none" style={{ flexGrow: 999, flexShrink: 1, flexBasis: 640, minWidth: 0, overflow: 'hidden' }}>
            <div style={{ padding: 'var(--space-4) var(--space-5)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center', justifyContent: 'space-between', borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4-size)', color: 'var(--text-strong)' }}>Clínicas</h2>
              <Tabs<Filter> variant="segmented" size="sm" value={filter} onChange={setFilter} items={[
                { id: 'all', label: 'Todas', count: counts.all },
                { id: 'over', label: 'Acima', count: counts.over },
                { id: 'near', label: 'Perto do limite', count: counts.near },
                { id: 'noplan', label: 'Sem plano', count: counts.noplan },
              ]} />
            </div>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: 760 }}>
                <div style={{ display: 'grid', gridTemplateColumns: ROW_COLUMNS, gap: 'var(--space-3)', padding: 'var(--space-2) var(--space-5)', background: 'var(--surface-subtle)',
                  borderBottom: 'var(--border-w) solid var(--border-subtle)', fontSize: 'var(--text-xs-size)', fontWeight: 600, color: 'var(--text-muted)' }}>
                  <span>Clínica · plano</span><span>Uso da franquia</span><span style={{ textAlign: 'right' }}>IA</span>
                  <span style={{ textAlign: 'right' }}>WhatsApp</span><span style={{ textAlign: 'right' }}>A repassar</span><span>Situação</span>
                </div>
                {clinics === null && !error && <p style={{ margin: 0, padding: 'var(--space-6)', color: 'var(--text-muted)' }}>Carregando…</p>}
                {clinics !== null && visible.length === 0 && (
                  <p style={{ margin: 0, padding: 'var(--space-6)', color: 'var(--text-muted)' }}>
                    {list.length === 0 ? 'Nenhum uso registrado neste mês.' : 'Nenhuma clínica neste filtro.'}
                  </p>
                )}
                {visible.map((c) => <ClinicRow key={c.orgId} clinic={c} selected={c.orgId === selected} onSelect={() => setSelected(c.orgId)} />)}
              </div>
            </div>
          </Card>

          <aside aria-label="Detalhe da clínica" style={{ flexGrow: 1, flexShrink: 1, flexBasis: 380, minWidth: 0 }}>
            {detail ? <ClinicDetailPanel detail={detail} month={month} /> : selected && <Card padding="md"><span style={{ color: 'var(--text-muted)' }}>Carregando detalhe…</span></Card>}
          </aside>
        </div>
      </main>
    </>,
  );
}
