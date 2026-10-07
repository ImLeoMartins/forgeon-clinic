import { Icon, type IconName } from '../icons/Icon';
import { useInteractive, transition, type Locale } from '../utils/interactive';

/** Inbox row for the conversations list. */
export interface ConversationItemProps {
  name: string;
  preview: string;
  time: string;
  unread?: number;
  handledBy?: 'agent' | 'human';
  /** Waiting for a human — shows red "Aguarda humano" */
  urgent?: boolean;
  selected?: boolean;
  onClick?: () => void;
  locale?: Locale;
}

export function ConversationItem({ name, preview, time, unread = 0, handledBy = 'agent', urgent = false, selected = false, onClick, locale = 'pt-BR' }: ConversationItemProps) {
  const [h, s] = useInteractive(false);
  const es = locale === 'es-ES';
  const whoMap: Record<'agent' | 'human' | 'waiting', [IconName, string, string]> = {
    agent: ['sparkles', 'var(--ai-accent-text)', 'IA'],
    human: ['headset', 'var(--teal-700)', es ? 'Recepción' : 'Recepção'],
    waiting: ['hand', 'var(--danger-text)', es ? 'Espera humano' : 'Aguarda humano'],
  };
  const who = whoMap[urgent ? 'waiting' : handledBy];
  return (
    <button type="button" onClick={onClick} {...h}
      style={{ display: 'flex', gap: 12, width: '100%', textAlign: 'left', paddingBlock: 'var(--space-3)', paddingInline: 14, border: 0, borderRadius: 'var(--radius-md)', cursor: 'pointer', fontFamily: 'var(--font-text)',
        background: selected ? 'var(--surface-selected)' : s.hover ? 'var(--surface-hover)' : 'transparent', boxShadow: s.focus ? 'var(--focus-ring)' : 'none', transition, outline: 'none' }}>
      <span style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-pill)', display: 'grid', placeItems: 'center', background: urgent ? 'var(--danger-surface)' : 'var(--sand-100)', color: urgent ? 'var(--danger-text)' : 'var(--ink-600)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>
        {name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
      </span>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ flex: 1, minWidth: 0, fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', fontWeight: unread ? 700 : 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
          <span style={{ fontSize: 12, color: unread ? 'var(--teal-700)' : 'var(--text-subtle)', fontVariantNumeric: 'tabular-nums', fontWeight: unread ? 600 : 400 }}>{time}</span>
        </span>
        <span style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{preview}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: who[1] }}><Icon name={who[0]} size={13} />{who[2]}</span>
          <span style={{ flex: 1 }} />
          {unread > 0 && <span style={{ minWidth: 20, height: 20, paddingInline: 6, boxSizing: 'border-box', borderRadius: 'var(--radius-pill)', background: 'var(--action-primary)', color: 'var(--text-on-primary)', fontSize: 11.5, fontWeight: 700, display: 'inline-grid', placeItems: 'center', fontVariantNumeric: 'tabular-nums' }}>{unread}</span>}
        </span>
      </span>
    </button>
  );
}
