import React from 'react';
import { Logo, Icon, IconButton, Avatar, Switch, type IconName, type Locale } from '../../index';

export type Screen = 'inicio' | 'agenda' | 'conversas' | 'pacientes' | 'mensagens';

const NAV: Array<{ id: Screen; icon: IconName; pt: string; es: string }> = [
  { id: 'inicio', icon: 'layout-dashboard', pt: 'Início', es: 'Inicio' },
  { id: 'agenda', icon: 'calendar-days', pt: 'Agenda', es: 'Agenda' },
  { id: 'conversas', icon: 'messages-square', pt: 'Conversas', es: 'Conversaciones' },
  { id: 'pacientes', icon: 'users', pt: 'Pacientes', es: 'Pacientes' },
  { id: 'mensagens', icon: 'file-text', pt: 'Mensagens', es: 'Plantillas' },
];

function NavItem({ item, active, onClick, locale, badge }: { item: { icon: IconName; pt: string; es: string }; active?: boolean; onClick: () => void; locale: Locale; badge?: number }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 12, height: 44, paddingBlock: 0, paddingInline: 'var(--space-3)', border: 0, borderRadius: 'var(--radius-md)', cursor: 'pointer', width: '100%',
        background: active ? 'var(--surface-selected)' : hover ? 'var(--surface-hover)' : 'transparent', color: active ? 'var(--teal-700)' : 'var(--text-body)',
        fontFamily: 'var(--font-text)', fontSize: 'var(--text-ui-size)', fontWeight: active ? 600 : 500, transition: 'background-color var(--duration-fast)' }}>
      <Icon name={item.icon} size={20} />
      <span style={{ flex: 1, textAlign: 'left' }}>{item[locale === 'es-ES' ? 'es' : 'pt']}</span>
      {badge ? <span style={{ minWidth: 22, height: 22, paddingInline: 7, boxSizing: 'border-box', borderRadius: 'var(--radius-pill)', background: 'var(--danger)', color: 'var(--text-on-primary)', fontSize: 12, fontWeight: 700, display: 'inline-grid', placeItems: 'center' }}>{badge}</span> : null}
    </button>
  );
}

export interface SidebarProps { screen: Screen; setScreen: (s: Screen) => void; locale: Locale; agentOn: boolean; setAgentOn: (v: boolean) => void; handoffs: number; theme: 'light' | 'dark' }

export function Sidebar({ screen, setScreen, locale, agentOn, setAgentOn, handoffs, theme }: SidebarProps) {
  const es = locale === 'es-ES';
  return (
    <aside style={{ width: 'var(--sidebar-w)', flex: 'none', display: 'flex', flexDirection: 'column', gap: 24, paddingBlock: 'var(--space-5)', paddingInline: 14, boxSizing: 'border-box', background: 'var(--surface-card)', borderRight: 'var(--border-w) solid var(--border-subtle)', height: '100%', overflowY: 'auto' }}>
      <div style={{ paddingBlock: 'var(--space-1)', paddingInline: 10 }}><Logo size={28} tone={theme === 'dark' ? 'white' : 'color'} /></div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV.map((n) => <NavItem key={n.id} item={n} locale={locale} active={screen === n.id} onClick={() => setScreen(n.id)} badge={n.id === 'conversas' ? handoffs : 0} />)}
      </nav>
      <div style={{ flex: 1 }} />
      <div style={{ padding: 14, borderRadius: 'var(--radius-lg)', background: 'var(--ai-surface)', border: 'var(--border-w) solid var(--ai-border)', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ai-accent-text)', fontSize: 13, fontWeight: 700 }}><Icon name="sparkles" size={16} />Agente IA</div>
        <div style={{ fontSize: 13, lineHeight: 'var(--text-xs-lh)', color: 'var(--text-body)' }}>{agentOn ? (es ? 'Respondiendo en WhatsApp 24 h.' : 'Respondendo no WhatsApp 24h.') : (es ? 'Pausado. La recepción responde.' : 'Pausado. A recepção responde.')}</div>
        <Switch checked={agentOn} onChange={setAgentOn} label={agentOn ? (es ? 'Activo' : 'Ativo') : 'Pausado'} />
      </div>
      <NavItem item={{ icon: 'settings', pt: 'Configurações', es: 'Ajustes' }} locale={locale} onClick={() => {}} />
    </aside>
  );
}

export interface TopbarProps { title: string; subtitle?: string; locale: Locale; setLocale: (l: Locale) => void; theme: 'light' | 'dark'; setTheme: (t: 'light' | 'dark') => void; actions?: React.ReactNode }

export function Topbar({ title, subtitle, locale, setLocale, theme, setTheme, actions }: TopbarProps) {
  const es = locale === 'es-ES';
  const locales: Locale[] = ['pt-BR', 'es-ES'];
  return (
    <header style={{ height: 'var(--topbar-h)', flex: 'none', display: 'flex', alignItems: 'center', gap: 16, paddingBlock: 0, paddingInline: 28, borderBottom: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-card)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontSize: 20, lineHeight: 'var(--text-lg-lh)', fontWeight: 700, letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h1>
        {subtitle && <div style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{subtitle}</div>}
      </div>
      {actions}
      <div style={{ display: 'flex', alignItems: 'center', height: 36, borderRadius: 10, background: 'var(--bg-sunken)', padding: 3 }}>
        {locales.map((l) => <button key={l} type="button" onClick={() => setLocale(l)} style={{ height: 30, paddingBlock: 0, paddingInline: 10, border: 0, borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontFamily: 'var(--font-text)', fontSize: 12.5, fontWeight: 600, background: locale === l ? 'var(--surface-card)' : 'transparent', color: locale === l ? 'var(--text-strong)' : 'var(--text-muted)', boxShadow: locale === l ? 'var(--shadow-xs)' : 'none' }}>{l === 'pt-BR' ? 'PT' : 'ES'}</button>)}
      </div>
      <IconButton icon={theme === 'dark' ? 'sun' : 'moon'} label={es ? 'Cambiar tema' : 'Alternar tema'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <IconButton icon="bell" label={es ? 'Notificaciones' : 'Notificações'} badge={true} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 'var(--space-2)', borderLeft: 'var(--border-w) solid var(--border-subtle)' }}>
        <Avatar name="Carla Mendes" size={36} status="online" />
        <div style={{ lineHeight: 'var(--text-xs-lh)' }}><div style={{ fontSize: 'var(--text-sm-size)', fontWeight: 600, color: 'var(--text-strong)' }}>Carla Mendes</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{es ? 'Recepción' : 'Recepção'}</div></div>
      </div>
    </header>
  );
}
