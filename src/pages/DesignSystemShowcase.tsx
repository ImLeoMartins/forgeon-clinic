import React from 'react';
import {
  Logo, Icon, iconNames, Button, IconButton, Input, Select, Textarea, Checkbox, Radio, Switch, Card, Badge, Tag, Avatar, Tabs,
  Dialog, Toast, Tooltip, ChatBubble, ConversationItem, StatusBadge, AppointmentCard, TimeSlots, WeekCalendar, HandoffAlert,
  PatientTable, KpiCard, ForceState, type BadgeTone, type ButtonVariant, type IconButtonVariant, type AppointmentStatus, type Locale,
} from '@ds';
import { PainelApp, SiteLanding, FC_DATA } from '@ds/templates';

/**
 * /design-system — renders the whole library: foundations, every component with every variant and state, and the templates.
 * Every specimen is shown side by side in the light and dark themes (data-theme on each half).
 * Hover / active / focus are forced with <ForceState> so they can be inspected statically.
 */

const STATUSES: AppointmentStatus[] = ['confirmed', 'pending', 'cancelled', 'noshow', 'rescheduled'];
const LOCALES: Locale[] = ['pt-BR', 'es-ES'];
const BUTTON_VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'soft', 'ghost', 'danger', 'whatsapp'];
const ICON_BUTTON_VARIANTS: IconButtonVariant[] = ['ghost', 'secondary', 'primary', 'soft'];
const BADGE_TONES: BadgeTone[] = ['neutral', 'teal', 'success', 'warning', 'danger', 'ai', 'brand', 'whatsapp', 'solid'];
const STATES = [
  { id: 'default', label: 'default', state: null },
  { id: 'hover', label: 'hover', state: { hover: true } },
  { id: 'active', label: 'active', state: { hover: true, press: true } },
  { id: 'focus', label: 'focus', state: { focus: true } },
] as const;

const COLOR_GROUPS: Array<{ title: string; tokens: string[] }> = [
  { title: 'Clinic Teal', tokens: ['teal-50', 'teal-100', 'teal-200', 'teal-300', 'teal-400', 'teal-500', 'teal-600', 'teal-700', 'teal-800', 'teal-900'] },
  { title: 'Forgeon indigo / violet', tokens: ['indigo-50', 'indigo-100', 'indigo-300', 'indigo-500', 'indigo-600', 'indigo-700', 'violet-50', 'violet-500', 'violet-600'] },
  { title: 'Sand (neutros quentes)', tokens: ['sand-0', 'sand-25', 'sand-50', 'sand-100', 'sand-200', 'sand-300', 'sand-400', 'sand-500'] },
  { title: 'Ink (texto)', tokens: ['ink-900', 'ink-800', 'ink-700', 'ink-600', 'ink-500', 'ink-400', 'ink-300'] },
  { title: 'Semânticas base', tokens: ['green-50', 'green-500', 'green-700', 'amber-50', 'amber-200', 'amber-500', 'amber-700', 'red-50', 'red-100', 'red-500', 'red-700', 'slate-50', 'whatsapp-50', 'whatsapp-500', 'whatsapp-600', 'whatsapp-700', 'whatsapp-900'] },
  { title: 'Superfícies (mudam no tema escuro)', tokens: ['bg-app', 'bg-sunken', 'surface-card', 'surface-raised', 'surface-subtle', 'surface-hover', 'surface-selected', 'surface-inverse'] },
  { title: 'Texto e borda', tokens: ['text-strong', 'text-body', 'text-muted', 'text-subtle', 'text-link', 'border-subtle', 'border-default', 'border-strong', 'border-focus'] },
  { title: 'Ação, IA e estados', tokens: ['action-primary', 'action-primary-hover', 'action-primary-active', 'action-primary-subtle', 'ai-accent', 'ai-accent-text', 'ai-surface', 'success', 'success-surface', 'warning', 'warning-surface', 'danger', 'danger-surface', 'info', 'info-surface', 'whatsapp'] },
  { title: 'Status de consulta e chat', tokens: ['status-confirmed', 'status-confirmed-bg', 'status-pending', 'status-pending-bg', 'status-cancelled', 'status-cancelled-bg', 'status-noshow', 'status-noshow-bg', 'status-rescheduled', 'status-rescheduled-bg', 'bubble-patient', 'bubble-agent', 'bubble-human', 'chat-wallpaper'] },
];
const TYPE_SCALE = ['display', 'h1', 'h2', 'h3', 'h4', 'lg', 'md', 'ui', 'sm', 'xs', 'overline', 'kpi'];
const SPACES = ['0-5', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'];
const RADII = ['xs', 'sm', 'md', 'lg', 'xl', 'pill'];
const SHADOWS = ['xs', 'sm', 'md', 'lg'];
const NAV = ['Fundações', 'Marca e ícones', 'Ações', 'Formulários', 'Exibição', 'Navegação', 'Overlays', 'Chat', 'Clínica', 'Templates'];

const DIALOG_STAGE_H = 360;
const PANEL_H = 820;
const SITE_H = 900;
const EMAIL_H = 820;

function slug(s: string) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-'); }

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section id={slug(title)} className="flex flex-col gap-6 scroll-mt-24">
      <header className="flex flex-col gap-1">
        <h2 className="font-display text-h2 text-text-strong">{title}</h2>
        {description && <p className="text-sm text-text-muted max-w-3xl">{description}</p>}
      </header>
      {children}
    </section>
  );
}

/** Renders the same specimen in the light and the dark theme. */
function ThemePair({ children, stack = false }: { children: React.ReactNode; stack?: boolean }) {
  return (
    <div className={stack ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 xl:grid-cols-2 gap-4'}>
      {(['light', 'dark'] as const).map((t) => (
        <div key={t} data-theme={t} className="bg-bg-app text-text-body rounded-lg border border-border-subtle p-5 flex flex-col gap-5 min-w-0">
          <span className="text-overline uppercase tracking-widest font-semibold text-text-subtle">{t === 'light' ? 'Tema claro' : 'Tema escuro'}</span>
          {children}
        </div>
      ))}
    </div>
  );
}

function Specimen({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <span className="font-mono text-xs text-text-subtle">{label}</span>
      <div className="flex flex-wrap items-center gap-3 min-w-0">{children}</div>
    </div>
  );
}

function Forced({ state, children }: { state: (typeof STATES)[number]['state']; children: React.ReactNode }) {
  return state ? <ForceState state={state}>{children}</ForceState> : <>{children}</>;
}

/* ───────────── Foundations ───────────── */

function Foundations() {
  return (
    <Section title="Fundações" description="Tokens de DESIGN.md → design-system/tokens/*.css. Cores semânticas trocam de valor no tema escuro; as escalas base não.">
      <ThemePair>
        {COLOR_GROUPS.map((g) => (
          <Specimen key={g.title} label={g.title}>
            {g.tokens.map((t) => (
              <div key={t} className="flex flex-col gap-1 w-24">
                <div className="h-12 rounded-md border border-border-subtle" style={{ background: `var(--${t})` }} />
                <span className="font-mono text-xs text-text-muted break-all">{t}</span>
              </div>
            ))}
          </Specimen>
        ))}
        <Specimen label="brand-gradient (só logo e badge 'Novo')">
          <div className="h-12 w-48 rounded-md" style={{ background: 'var(--brand-gradient)' }} />
        </Specimen>
      </ThemePair>
      <ThemePair>
        <Specimen label="Tipografia — Manrope (display) · Inter (texto) · JetBrains Mono (variáveis)">
          <div className="flex flex-col gap-2 min-w-0">
            {TYPE_SCALE.map((s) => (
              <div key={s} className="flex items-baseline gap-4 min-w-0">
                <span className="font-mono text-xs text-text-subtle w-20 shrink-0">{s}</span>
                <span className={['display', 'h1', 'h2', 'h3', 'h4', 'kpi'].includes(s) ? 'font-display font-bold text-text-strong truncate' : 'text-text-body truncate'}
                  style={{ fontSize: `var(--text-${s}-size)`, lineHeight: `var(--text-${s}-lh)` }}>
                  {s === 'kpi' ? '92,4%' : 'Sua agenda cuidada'}
                </span>
              </div>
            ))}
            <span className="font-mono text-sm text-ai-accent-text">{'{{paciente.nome}}'}</span>
            <span className="text-md tabular-nums text-text-strong">08:00 · 14:30 · 15/10 · 92,4%</span>
          </div>
        </Specimen>
      </ThemePair>
      <ThemePair>
        <Specimen label="Espaçamento (base de 4 px)">
          <div className="flex flex-col gap-1">
            {SPACES.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <span className="font-mono text-xs text-text-subtle w-16">space-{s}</span>
                <div className="h-3 rounded-xs bg-teal-500" style={{ width: `var(--space-${s})` }} />
              </div>
            ))}
          </div>
        </Specimen>
        <Specimen label="Raios">
          {RADII.map((r) => <div key={r} className="w-20 h-14 grid place-items-center bg-surface-card border border-border-default font-mono text-xs text-text-muted" style={{ borderRadius: `var(--radius-${r})` }}>{r}</div>)}
        </Specimen>
        <Specimen label="Sombras">
          {SHADOWS.map((s) => <div key={s} className="w-24 h-16 grid place-items-center bg-surface-card rounded-lg font-mono text-xs text-text-muted" style={{ boxShadow: `var(--shadow-${s})` }}>{s}</div>)}
          <div className="w-24 h-16 grid place-items-center bg-surface-card rounded-lg font-mono text-xs text-text-muted" style={{ boxShadow: 'var(--focus-ring)' }}>focus-ring</div>
        </Specimen>
        <Specimen label="Movimento — fast 120ms · base 200ms · slow 320ms · cubic-bezier(.2,.7,.2,1); zera com prefers-reduced-motion">
          {['fast', 'base', 'slow'].map((d) => <Badge key={d} tone="neutral">duration-{d}</Badge>)}
        </Specimen>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Brand & icons ───────────── */

function BrandAndIcons() {
  return (
    <Section title="Marca e ícones" description="Logo (lockup, endorsed, symbol, forgeon × color, ink, white) e os ícones Lucide + WhatsApp (traço 1.75).">
      <ThemePair>
        {(['color', 'ink', 'white'] as const).map((tone) => (
          <Specimen key={tone} label={`Logo tone="${tone}"`}>
            <div className={tone === 'white' ? 'flex flex-wrap items-center gap-6 rounded-lg p-4 bg-teal-700' : 'flex flex-wrap items-center gap-6 rounded-lg p-4 bg-sand-0'}>
              <Logo tone={tone} variant="lockup" />
              <Logo tone={tone} variant="endorsed" />
              <Logo tone={tone} variant="symbol" />
              <Logo tone={tone} variant="forgeon" size={24} />
            </div>
          </Specimen>
        ))}
        <Specimen label="Tamanhos do símbolo (mín. 16 px)">
          {[16, 24, 32, 48].map((s) => <Logo key={s} variant="symbol" size={s} />)}
        </Specimen>
      </ThemePair>
      <ThemePair>
        <Specimen label={`Ícones (${iconNames.length}) — 20px, currentColor`}>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 w-full">
            {iconNames.map((n) => (
              <div key={n} className="flex flex-col items-center gap-1 p-2 rounded-md bg-surface-card border border-border-subtle text-text-body min-w-0">
                <Icon name={n} />
                <span className="font-mono text-xs text-text-subtle truncate max-w-full">{n}</span>
              </div>
            ))}
          </div>
        </Specimen>
        <Specimen label="Tamanhos 16 · 20 · 24 e cores de marcador">
          <Icon name="calendar-check" size={16} /><Icon name="calendar-check" size={20} /><Icon name="calendar-check" size={24} />
          <Icon name="sparkles" color="var(--ai-accent)" /><Icon name="headset" color="var(--teal-600)" /><Icon name="hand" color="var(--danger)" /><Icon name="whatsapp" color="var(--whatsapp-text)" />
          <Icon name="info" title="Ícone com rótulo acessível" />
        </Specimen>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Actions ───────────── */

function Actions() {
  return (
    <Section title="Ações" description="Button: 6 variantes × default, hover, active, focus, disabled, loading; tamanhos sm 36 · md 44 · lg 52. IconButton: 4 variantes, badge.">
      <ThemePair>
        {BUTTON_VARIANTS.map((v) => (
          <Specimen key={v} label={`Button variant="${v}"`}>
            {STATES.map((s) => <Forced key={s.id} state={s.state}><Button variant={v} iconLeft={v === 'whatsapp' ? undefined : 'calendar-plus'}>{s.label}</Button></Forced>)}
            <Button variant={v} disabled>disabled</Button>
            <Button variant={v} loading>loading</Button>
          </Specimen>
        ))}
        <Specimen label="Tamanhos, ícone à direita, largura total">
          <Button size="sm">Pequeno</Button><Button size="md">Médio</Button><Button size="lg" iconRight="arrow-right">Agendar demonstração</Button>
          <div className="w-full"><Button fullWidth variant="secondary" iconLeft="repeat">Remarcar</Button></div>
        </Specimen>
      </ThemePair>
      <ThemePair>
        {ICON_BUTTON_VARIANTS.map((v) => (
          <Specimen key={v} label={`IconButton variant="${v}" — default · hover · active · focus · disabled`}>
            {STATES.map((s) => <Forced key={s.id} state={s.state}><IconButton variant={v} icon="pencil" label={`Editar (${s.label})`} /></Forced>)}
            <IconButton variant={v} icon="pencil" label="Editar (desativado)" disabled />
          </Specimen>
        ))}
        <Specimen label="Tamanhos e badge (ponto · número)">
          <IconButton icon="ellipsis" label="Mais" size="sm" /><IconButton icon="search" label="Buscar" size="md" /><IconButton icon="plus" label="Adicionar" size="lg" variant="primary" />
          <IconButton icon="bell" label="Notificações" badge={true} /><IconButton icon="bell" label="Notificações" badge={3} />
        </Specimen>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Forms ───────────── */

function Forms() {
  const [sw, setSw] = React.useState(true);
  return (
    <Section title="Formulários" description="Input, Select, Textarea (default, focus, erro, desativado, dica, obrigatório), Checkbox, Radio e Switch (marcado, desmarcado, foco, desativado).">
      <ThemePair>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Nome do paciente" placeholder="Marina Souza" hint="Como aparece no WhatsApp." />
          <ForceState state={{ focus: true }}><Input label="Telefone (focus)" iconLeft="phone" defaultValue="+55 11 98765-4321" /></ForceState>
          <Input label="Telefone" required error="Informe um telefone com DDD." defaultValue="98765" />
          <Input label="Clínica (desativado)" disabled defaultValue="Clínica Sorriso & Mente" />
          <Input label="Duração" suffix="min" defaultValue="50" size="sm" />
          <Input label="Busca grande" iconLeft="search" placeholder="Buscar paciente…" size="lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select label="Profissional" options={FC_DATA.professionals.map((p) => ({ value: p.id, label: p.name }))} placeholder="Escolha…" />
          <ForceState state={{ focus: true }}><Select label="Idioma (focus)" iconLeft="languages" options={['pt-BR', 'es-ES']} /></ForceState>
          <Select label="Serviço" error="Escolha um serviço." options={['Limpeza', 'Avaliação']} placeholder="Escolha…" />
          <Select label="Sala (desativado)" disabled options={['Sala 1']} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Textarea label="Instruções para o agente" placeholder="Ex.: nunca falar de preço de canal…" hint="O agente segue estas regras em toda conversa." />
          <ForceState state={{ focus: true }}><Textarea label="Observações (focus)" rows={3} placeholder="Paciente prefere manhãs." /></ForceState>
          <Textarea label="Modelo" error="Use pelo menos uma variável {{paciente.nome}}." rows={3} />
          <Textarea label="Desativado" disabled rows={3} placeholder="Somente leitura." />
        </div>
        <Specimen label="Checkbox — desmarcado · marcado · focus · desativado · com descrição">
          <Checkbox label="Lembrete 24h antes" />
          <Checkbox label="Confirmação por e-mail" defaultChecked />
          <ForceState state={{ focus: true }}><Checkbox label="Focus" defaultChecked /></ForceState>
          <Checkbox label="Desativado" disabled />
          <Checkbox label="Desativado marcado" disabled defaultChecked />
          <Checkbox label="Resumo diário" description="Enviado às 07:00 para a recepção." defaultChecked />
        </Specimen>
        <Specimen label="Radio — grupo · focus · desativado">
          <Radio name="canal" value="wa" label="WhatsApp" defaultChecked />
          <Radio name="canal" value="mail" label="E-mail" />
          <ForceState state={{ focus: true }}><Radio name="canal-f" value="f" label="Focus" /></ForceState>
          <Radio name="canal-d" value="d" label="Desativado" disabled />
          <Radio name="canal-x" value="x" label="Telefone" description="Só para pacientes sem WhatsApp." />
        </Specimen>
        <Specimen label="Switch — ligado · desligado · focus · desativado · com descrição">
          <Switch checked={sw} onChange={setSw} label={sw ? 'Agente ativo' : 'Agente pausado'} />
          <Switch label="Desligado" />
          <ForceState state={{ focus: true }}><Switch label="Focus" defaultChecked /></ForceState>
          <Switch label="Desativado" disabled defaultChecked />
          <Switch label="Lembretes" description="Aplica imediatamente." defaultChecked />
        </Specimen>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Display ───────────── */

function Display() {
  const [tags, setTags] = React.useState(['Odontologia', 'Psicologia']);
  return (
    <Section title="Exibição" description="Card (outlined, elevated, flat, selected; paddings), Badge (9 tons × 2 tamanhos), Tag (default, hover, focus, selecionada, removível, contador) e Avatar.">
      <ThemePair>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(['outlined', 'elevated', 'flat', 'selected'] as const).map((v) => (
            <Card key={v} variant={v} title={`Card ${v}`} subtitle="Cabeçalho, corpo e rodapé" actions={<IconButton icon="ellipsis" label="Mais" size="sm" />} footer={<span className="text-sm text-text-muted">Rodapé em surface-subtle</span>}>
              <p className="text-sm text-text-body">Superfície branca, borda sand de 1px, sombra xs.</p>
            </Card>
          ))}
          {(['none', 'sm', 'lg'] as const).map((p) => <Card key={p} padding={p}><span className="text-sm text-text-muted">padding="{p}"</span></Card>)}
          <Card onClick={() => {}} title="Card clicável" subtitle="cursor pointer"><span className="text-sm text-text-muted">onClick</span></Card>
        </div>
        <Specimen label="Badge — tons (md)">{BADGE_TONES.map((t) => <Badge key={t} tone={t}>{t}</Badge>)}</Specimen>
        <Specimen label="Badge — sm · dot · ícone">{BADGE_TONES.map((t) => <Badge key={t} tone={t} size="sm" dot={t !== 'brand'} icon={t === 'ai' ? 'sparkles' : undefined}>{t === 'brand' ? 'Novo' : t}</Badge>)}</Specimen>
        <Specimen label="Tag — default · hover · focus · selecionada · contador · ícone · removível · estática">
          <Tag onClick={() => {}}>Todos</Tag>
          <ForceState state={{ hover: true }}><Tag onClick={() => {}}>Hover</Tag></ForceState>
          <ForceState state={{ focus: true }}><Tag onClick={() => {}}>Focus</Tag></ForceState>
          <Tag selected onClick={() => {}} count={8}>Selecionada</Tag>
          <Tag onClick={() => {}} icon="filter" count={3}>Pendentes</Tag>
          {tags.map((t) => <Tag key={t} onRemove={() => setTags((s) => s.filter((x) => x !== t))}>{t}</Tag>)}
          <Tag>Estática</Tag>
        </Specimen>
        <Specimen label="Avatar — tamanhos · 6 tons · status · foto">
          {[24, 32, 40, 48, 64].map((s) => <Avatar key={s} name="Marina Souza" size={s} />)}
          {[0, 1, 2, 3, 4, 5].map((t) => <Avatar key={t} name="Dra. Ana Lima" tone={t} />)}
          <Avatar name="Carla Mendes" status="online" /><Avatar name="Paulo Reis" status="away" /><Avatar name="Júlia Prado" status="offline" />
          <Avatar name="Forgeon" src="/design-system/assets/logo/forgeon-symbol.svg" />
        </Specimen>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Navigation ───────────── */

function Navigation() {
  const [a, setA] = React.useState('ana');
  const [b, setB] = React.useState('semana');
  const [c, setC] = React.useState('todas');
  return (
    <Section title="Navegação" description="Tabs underline (seções) e segmented (alternância de visão), com ícone, contador e contador urgente; md e sm.">
      <ThemePair>
        <Specimen label='variant="underline" size="md" — com contadores'>
          <Tabs value={a} onChange={setA} items={[{ id: 'ana', label: 'Dra. Ana Lima', count: 3 }, { id: 'paulo', label: 'Dr. Paulo Reis', count: 3 }, { id: 'julia', label: 'Dra. Júlia Prado', count: 1 }]} />
        </Specimen>
        <Specimen label='variant="underline" size="sm" — contador urgente'>
          <Tabs size="sm" value={c} onChange={setC} items={[{ id: 'todas', label: 'Todas' }, { id: 'humano', label: 'Aguardando', count: 1, urgent: true }, { id: 'ia', label: 'IA' }, { id: 'recepcao', label: 'Recepção' }]} />
        </Specimen>
        <Specimen label='variant="segmented" — md com ícones · sm'>
          <Tabs variant="segmented" value={b === 'semana' ? 'd' : 'p'} onChange={(v) => setB(v === 'd' ? 'semana' : 'dia')} items={[{ id: 'd', label: 'Odontologia', icon: 'smile' }, { id: 'p', label: 'Psicologia', icon: 'brain' }]} />
          <Tabs variant="segmented" size="sm" value={b} onChange={setB} items={[{ id: 'dia', label: 'Dia' }, { id: 'semana', label: 'Semana' }]} />
        </Specimen>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Overlays ───────────── */

function Overlays() {
  const [open, setOpen] = React.useState(false);
  return (
    <Section title="Overlays" description="Dialog (default, danger, ai; com conteúdo e ações), Toast (5 tons, com ação e fechar) e Tooltip (4 posições).">
      <ThemePair>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {(['default', 'danger', 'ai'] as const).map((tone) => (
            <div key={tone} className="relative rounded-lg overflow-hidden border border-border-subtle" style={{ height: DIALOG_STAGE_H }}>
              <Dialog inline tone={tone} width={420} icon={tone === 'danger' ? 'calendar-x' : tone === 'ai' ? 'sparkles' : 'repeat'}
                title={tone === 'danger' ? 'Cancelar consulta?' : tone === 'ai' ? 'Sugestão do agente' : 'Remarcar Marina'}
                description={tone === 'danger' ? 'Vamos avisar Marina pelo WhatsApp e liberar o horário.' : 'Escolha um horário livre. Vamos enviar a nova data pelo WhatsApp.'}
                onClose={() => {}} actions={<><Button variant="ghost" size="sm">Voltar</Button><Button size="sm" variant={tone === 'danger' ? 'danger' : 'primary'}>{tone === 'danger' ? 'Cancelar consulta' : 'Confirmar'}</Button></>} />
            </div>
          ))}
        </div>
        <Specimen label="Dialog com conteúdo (abre em tela cheia)">
          <Button variant="secondary" iconLeft="repeat" onClick={() => setOpen(true)}>Abrir diálogo</Button>
        </Specimen>
        <Specimen label="Toast — info · success · warning · danger · ai">
          <div className="flex flex-col gap-3">
            <Toast tone="info" title="Consulta cancelada" description="O horário ficou livre." onClose={() => {}} />
            <Toast tone="success" title="Consulta remarcada" description="Marina recebeu a nova data no WhatsApp." onClose={() => {}} />
            <Toast tone="warning" title="Modelo pausado" description="Lembretes de retorno não serão enviados." />
            <Toast tone="danger" title="Falha ao enviar" description="O WhatsApp da clínica está desconectado." action={<Button size="sm" variant="secondary">Reconectar</Button>} />
            <Toast tone="ai" title="Agente pausado" description="Novas mensagens vão para a recepção." onClose={() => {}} />
          </div>
        </Specimen>
        <Specimen label="Tooltip — top · right · bottom · left (forçado aberto) e hover">
          <div className="flex flex-wrap gap-16 py-12 px-24">
            {(['top', 'right', 'bottom', 'left'] as const).map((p) => <Tooltip key={p} open placement={p} content={`Tooltip ${p}`}><IconButton icon="info" label={p} variant="secondary" /></Tooltip>)}
            <Tooltip content="Passe o mouse"><IconButton icon="circle-help" label="Ajuda" /></Tooltip>
          </div>
        </Specimen>
      </ThemePair>
      {open && (
        <Dialog title="Remarcar Marina Souza" description="Escolha um horário livre. Vamos enviar a nova data pelo WhatsApp." icon="repeat" onClose={() => setOpen(false)} width={520}
          actions={<><Button variant="ghost" onClick={() => setOpen(false)}>Voltar</Button><Button iconLeft="send" onClick={() => setOpen(false)}>Remarcar e avisar</Button></>}>
          <TimeSlots value="10:30" groups={[{ label: 'Manhã', slots: ['08:00', { time: '09:00', available: false }, { time: '10:30', suggested: true }, '11:00'] }]} />
        </Dialog>
      )}
    </Section>
  );
}

/* ───────────── Chat ───────────── */

function Chat() {
  return (
    <Section title="Chat" description="ChatBubble (paciente, agente, recepção, sistema; enviado, entregue, lido; conteúdo rico; pt-BR/es-ES) e ConversationItem (default, hover, focus, selecionado, não lidas, urgente, recepção).">
      <ThemePair>
        <div className="flex flex-col gap-3 rounded-lg p-4 bg-chat-wallpaper">
          <ChatBubble from="patient" author="Marina" text="Oi! Consigo remarcar minha sessão de quinta pra sexta?" time="09:10" />
          <ChatBubble from="agent" text="Claro, Marina! Na sexta a Dra. Ana tem estes horários:" time="09:10" status="read">
            <TimeSlots columns={3} value="10:30" slots={['09:00', '10:30', '14:00']} />
          </ChatBubble>
          <ChatBubble from="system" text="Agente pediu atendimento humano · 09:14" />
          <ChatBubble from="human" author="Carla" text="Oi, Pedro! Aqui é a Carla. Já te enviei a nota por e-mail." time="08:38" status="delivered" />
          <ChatBubble from="human" locale="es-ES" text="Hola, Javier. Te llamo en un momento." time="08:39" status="sent" />
          <ChatBubble from="agent" locale="es-ES" showLabel={false} text="Te recordamos tu cita de mañana a las 10:30. ¿La confirmas?" time="18:00" status="read" />
        </div>
        <div className="flex flex-col gap-1 rounded-lg p-2 bg-surface-card max-w-md">
          <ConversationItem name="Marcos Teixeira" preview="Tá doendo bastante e sangrando um pouco" time="09:18" unread={2} urgent />
          <ConversationItem name="Marina Souza" preview="Perfeito, obrigada!" time="09:12" selected />
          <ForceState state={{ hover: true }}><ConversationItem name="Hover" preview="Estado hover forçado" time="09:00" /></ForceState>
          <ForceState state={{ focus: true }}><ConversationItem name="Focus" preview="Estado focus forçado" time="09:00" /></ForceState>
          <ConversationItem name="Javier Ortega" preview="¿Aceptáis Sanitas?" time="08:57" unread={1} locale="es-ES" />
          <ConversationItem name="Pedro Alves" preview="Obrigado, até quinta!" time="08:40" handledBy="human" />
        </div>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Clinic ───────────── */

function Clinic() {
  const [slot, setSlot] = React.useState('10:30');
  const [sel, setSel] = React.useState('a3');
  const [row, setRow] = React.useState<string | null>('2');
  return (
    <Section title="Clínica" description="Componentes do domínio: StatusBadge, AppointmentCard, TimeSlots, WeekCalendar, HandoffAlert, PatientTable (com estado vazio) e KpiCard.">
      <ThemePair>
        {LOCALES.map((l) => (
          <Specimen key={l} label={`StatusBadge ${l} — md · sm`}>
            {STATUSES.map((s) => <StatusBadge key={s} status={s} locale={l} />)}
            {STATUSES.map((s) => <StatusBadge key={s + 'sm'} status={s} locale={l} size="sm" />)}
          </Specimen>
        ))}
      </ThemePair>
      <ThemePair>
        <div className="flex flex-col gap-3">
          {STATUSES.map((s, i) => (
            <AppointmentCard key={s} time={`0${8 + i}:00`} endTime={`0${8 + i}:50`} date="QUI" patient="Marina Souza" service="Terapia individual" professional="Dra. Ana Lima"
              room={i === 0 ? 'Sala 2' : undefined} status={s} bookedByAgent={i % 2 === 0} actions={<IconButton icon="message-circle" label="Abrir conversa" size="sm" />} />
          ))}
          <AppointmentCard time="14:30" patient="Selecionada" service="Avaliação" status="confirmed" selected onClick={() => {}} />
          <AppointmentCard time="15:00" patient="Compacta" service="Limpeza" professional="Dr. Paulo Reis" status="pending" compact />
          <AppointmentCard time="16:00" patient="Javier Ortega" service="Limpieza" status="rescheduled" locale="es-ES" bookedByAgent viaWhatsApp={false} />
        </div>
      </ThemePair>
      <ThemePair>
        <Specimen label="TimeSlots — livre · selecionado · indisponível · sugerido pela IA · grupos">
          <div className="w-full max-w-md">
            <TimeSlots value={slot} onChange={setSlot} groups={[{ label: 'Manhã', slots: ['08:00', { time: '09:00', available: false }, { time: '10:30', suggested: true }, '11:00'] }, { label: 'Tarde', slots: ['14:00', { time: '15:00', available: false }, { time: '16:30', suggested: true }, '17:00'] }]} />
          </div>
        </Specimen>
        <Specimen label="TimeSlots — hover forçado">
          <div className="w-full max-w-md"><ForceState state={{ hover: true }}><TimeSlots slots={['08:00', '09:00', '10:00', '11:00']} /></ForceState></div>
        </Specimen>
      </ThemePair>
      <ThemePair stack>
        <Specimen label="WeekCalendar — status, IA, bloqueio (almoço), linha de agora, selecionado">
          <div className="w-full overflow-x-auto">
            <WeekCalendar style={{ minWidth: 640 }} days={FC_DATA.days} appointments={FC_DATA.appointments.ana} startHour={8} endHour={18} hourHeight={52} now="10:40" selectedId={sel} onSelect={(x) => setSel(x.id)} />
          </div>
        </Specimen>
      </ThemePair>
      <ThemePair>
        <HandoffAlert urgency="urgent" title="Marcos Teixeira precisa de alguém da equipe" reason="Dor e sangramento após a extração de ontem." quote="Tá doendo bastante e sangrando um pouco" patient="Marcos" waiting="há 4 min" onAccept={() => {}} onView={() => {}} />
        <HandoffAlert title="Helena pediu para falar com a recepção" reason="Quer saber sobre reembolso do convênio." waiting="há 1 min" onAccept={() => {}} onView={() => {}} />
        <HandoffAlert urgency="urgent" compact title="El agente pidió ayuda humana" reason="Dolor tras la extracción." waiting="hace 4 min" locale="es-ES" onAccept={() => {}} />
        <HandoffAlert title="Sem ações" reason="Somente informativo." />
      </ThemePair>
      <ThemePair stack>
        <Specimen label="PatientTable — linhas, selecionada, hover (passe o mouse), telefone, sem status">
          <div className="w-full"><PatientTable rows={FC_DATA.patients} selectedId={row} onRowClick={(r) => setRow(r.id || null)} /></div>
        </Specimen>
        <Specimen label="PatientTable — vazio (pt-BR · es-ES)">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"><PatientTable rows={[]} /><PatientTable rows={[]} locale="es-ES" /></div>
        </Specimen>
      </ThemePair>
      <ThemePair>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <KpiCard icon="calendar-days" label="Consultas hoje" value={12} hint="3 profissionais" />
          <KpiCard icon="calendar-check" label="Taxa de confirmação" value="92,4" unit="%" delta={{ value: '+3,1 p.p.', trend: 'up' }} sparkline={[80, 84, 83, 88, 87, 90, 92]} />
          <KpiCard icon="user-x" label="Faltas (7 dias)" value="3" delta={{ value: '−40%', trend: 'down', good: true }} hint="vs. semana passada" />
          <KpiCard icon="trending-down" label="Confirmações (queda)" value="71" unit="%" delta={{ value: '−6 p.p.', trend: 'down' }} />
          <KpiCard tone="ai" icon="sparkles" label="Resolvidas pela IA" value="87" unit="%" delta={{ value: '+5%', trend: 'up' }} sparkline={[70, 72, 78, 80, 83, 85, 87]} />
        </div>
      </ThemePair>
    </Section>
  );
}

/* ───────────── Templates ───────────── */

function Templates() {
  return (
    <Section title="Templates" description="Composições prontas em design-system/templates: painel da clínica (clicável, PT/ES, claro/escuro), landing de vendas e e-mails transacionais.">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-subtle">PainelApp — tema claro</span>
        <div className="rounded-lg border border-border-subtle overflow-hidden"><PainelApp height={PANEL_H} /></div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-subtle">PainelApp — tema escuro, Agenda, es-ES</span>
        <div className="rounded-lg border border-border-subtle overflow-hidden"><PainelApp height={PANEL_H} initialTheme="dark" initialScreen="agenda" initialLocale="es-ES" /></div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-subtle">SiteLanding — a landing usa só o tema claro (o escuro é do painel)</span>
        <div className="rounded-lg border border-border-subtle overflow-auto" style={{ height: SITE_H }}><SiteLanding /></div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {['confirmacao-pt-BR', 'recordatorio-es-ES'].map((f) => (
          <div key={f} className="flex flex-col gap-2">
            <span className="font-mono text-xs text-text-subtle">templates/email/{f}.html (HTML de e-mail, estilos inline)</span>
            <iframe title={f} src={`/design-system/templates/email/${f}.html`} className="w-full rounded-lg border border-border-subtle bg-sand-0" style={{ height: EMAIL_H }} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-bg-app text-text-body">
      <header className="sticky top-0 z-30 border-b border-border-subtle bg-surface-nav-translucent backdrop-blur-md">
        <div className="mx-auto max-w-[var(--content-max)] px-6 h-16 flex items-center gap-6">
          <a href="/" aria-label="Início"><Logo size={26} /></a>
          <span className="font-display text-h4 text-text-strong">Design system</span>
          <nav className="hidden lg:flex gap-4 overflow-x-auto">
            {NAV.map((n) => <a key={n} href={`#${slug(n)}`} className="text-sm text-text-muted no-underline hover:text-text-strong whitespace-nowrap">{n}</a>)}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[var(--content-max)] px-6 py-10 flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-h1 text-text-strong">Forgeon Clinic — biblioteca completa</h1>
          <p className="text-md text-text-muted max-w-3xl">Contrato visual em <code className="font-mono text-sm">DESIGN.md</code>. Componentes em <code className="font-mono text-sm">design-system/components</code>, importados de <code className="font-mono text-sm">@ds</code>. Cada exemplo aparece no tema claro e no escuro.</p>
        </div>
        <Foundations />
        <BrandAndIcons />
        <Actions />
        <Forms />
        <Display />
        <Navigation />
        <Overlays />
        <Chat />
        <Clinic />
        <Templates />
      </main>
    </div>
  );
}
