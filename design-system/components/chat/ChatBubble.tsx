import React from 'react';
import { Icon } from '../icons/Icon';
import type { Locale } from '../utils/interactive';

const LABELS: Record<Locale, { agent: string; human: string }> = {
  'pt-BR': { agent: 'Agente IA', human: 'Recepção' },
  'es-ES': { agent: 'Agente IA', human: 'Recepción' },
};

/**
 * Message bubble for the conversations view — distinguishes patient, AI agent and human receptionist.
 * Bubbles are never WhatsApp green. `system` renders a centered info pill (handoff, transfers).
 */
export interface ChatBubbleProps {
  from?: 'patient' | 'agent' | 'human' | 'system';
  text?: string;
  /** "14:32" */
  time?: string;
  /** Outgoing delivery state */
  status?: 'sent' | 'delivered' | 'read';
  /** Human attendant name (human) or patient name */
  author?: string;
  locale?: Locale;
  /** Rich content under the text (slot pickers, buttons) */
  children?: React.ReactNode;
  showLabel?: boolean;
  style?: React.CSSProperties;
}

export function ChatBubble({ from = 'patient', text, time, status, author, locale = 'pt-BR', children, showLabel = true, style }: ChatBubbleProps) {
  if (from === 'system') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: 'var(--space-1)', ...style }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, paddingBlock: 6, paddingInline: 'var(--space-3)', borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)', border: 'var(--border-w) solid var(--border-subtle)', fontSize: 12.5, lineHeight: 'var(--text-overline-lh)', color: 'var(--text-muted)', fontWeight: 500 }}>
          <Icon name="info" size={13} />{text || children}
        </span>
      </div>
    );
  }
  const out = from !== 'patient';
  const L = LABELS[locale] || LABELS['pt-BR'];
  const bg = { patient: 'var(--bubble-patient)', agent: 'var(--bubble-agent)', human: 'var(--bubble-human)' }[from];
  const label = from === 'agent' ? L.agent : from === 'human' ? (author ? `${author} · ${L.human}` : L.human) : author;
  const r = 'var(--radius-lg)';
  const tail = 'var(--radius-xs)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: out ? 'flex-end' : 'flex-start', gap: 4, ...style }}>
      {showLabel && label && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, lineHeight: 'var(--text-overline-lh)', fontWeight: 600, paddingInline: 6,
          color: from === 'agent' ? 'var(--ai-accent-text)' : 'var(--text-muted)' }}>
          {from === 'agent' && <Icon name="sparkles" size={13} />}{from === 'human' && <Icon name="headset" size={13} />}{label}
        </span>
      )}
      <div style={{ maxWidth: '78%', boxSizing: 'border-box', paddingTop: 10, paddingInline: 14, paddingBottom: 'var(--space-2)', background: bg, color: 'var(--text-strong)',
        border: from === 'patient' ? 'var(--border-w) solid var(--border-subtle)' : 'var(--border-w) solid transparent', boxShadow: 'var(--shadow-xs)',
        borderRadius: out ? `${r} ${r} ${tail} ${r}` : `${r} ${r} ${r} ${tail}`, fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', textWrap: 'pretty', overflowWrap: 'anywhere' }}>
        {text && <div style={{ whiteSpace: 'pre-line' }}>{text}</div>}
        {children && <div style={{ marginTop: text ? 10 : 0 }}>{children}</div>}
        {(time || status) && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, marginTop: 2, fontSize: 11.5, lineHeight: 'var(--text-overline-lh)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
            {time}
            {out && status && <Icon name={status === 'sent' ? 'check' : 'check-check'} size={14} color={status === 'read' ? 'var(--teal-600)' : 'var(--text-subtle)'} />}
          </div>
        )}
      </div>
    </div>
  );
}
