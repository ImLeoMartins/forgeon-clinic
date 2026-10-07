import React from 'react';
import { Icon } from '../../icons/Icon';
import { Button } from '../../actions/Button';
import { Badge } from '../../display/Badge';
import type { Locale } from '../../utils/interactive';

const COPY: Record<Locale, { urgent: string; take: string; view: string; waiting: string }> = {
  'pt-BR': { urgent: 'Urgente', take: 'Assumir conversa', view: 'Ver conversa', waiting: 'Aguardando' },
  'es-ES': { urgent: 'Urgente', take: 'Atender conversación', view: 'Ver conversación', waiting: 'Esperando' },
};

/**
 * Alert when the agent passes a conversation to the reception team.
 * Urgent = red surface + "Urgente" badge; copy stays calm and factual, never alarmist.
 */
export interface HandoffAlertProps {
  urgency?: 'normal' | 'urgent';
  title: string;
  reason?: string;
  quote?: string;
  patient?: string;
  /** "há 4 min" */
  waiting?: string;
  locale?: Locale;
  onAccept?: () => void;
  onView?: () => void;
  compact?: boolean;
  style?: React.CSSProperties;
}

export function HandoffAlert({ urgency = 'normal', title, reason, quote, patient, waiting, locale = 'pt-BR', onAccept, onView, compact = false, style }: HandoffAlertProps) {
  const c = COPY[locale] || COPY['pt-BR'];
  const urgent = urgency === 'urgent';
  return (
    <div role={urgent ? 'alert' : 'status'} style={{ display: 'flex', gap: 14, padding: compact ? 14 : 18, borderRadius: 'var(--radius-lg)', boxSizing: 'border-box',
      background: urgent ? 'var(--danger-surface)' : 'var(--surface-card)', border: `var(--border-w) solid ${urgent ? 'var(--danger-border)' : 'var(--border-subtle)'}`, boxShadow: urgent ? 'none' : 'var(--shadow-sm)', ...style }}>
      <span style={{ flex: 'none', width: 40, height: 40, borderRadius: 'var(--radius-md)', display: 'grid', placeItems: 'center', background: urgent ? 'var(--danger)' : 'var(--teal-50)', color: urgent ? 'var(--text-on-primary)' : 'var(--teal-700)' }}>
        <Icon name={urgent ? 'hand' : 'headset'} size={20} />
      </span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', fontWeight: 700, color: 'var(--text-strong)' }}>{title}</span>
          {urgent && <Badge tone="danger" size="sm" style={{ background: 'var(--sand-0)' }}>{c.urgent}</Badge>}
          {waiting && <span style={{ fontSize: 12.5, color: urgent ? 'var(--danger-text)' : 'var(--text-muted)', fontVariantNumeric: 'tabular-nums', display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="clock" size={13} />{c.waiting} {waiting}</span>}
        </div>
        {reason && <span style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-body)' }}>{reason}</span>}
        {quote && <span style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 2 }}>{patient ? `${patient}: ` : ''}“{quote}”</span>}
        {(onAccept || onView) && !compact && (
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            {onAccept && <Button size="sm" variant={urgent ? 'danger' : 'primary'} iconLeft="headset" onClick={onAccept}>{c.take}</Button>}
            {onView && <Button size="sm" variant="ghost" onClick={onView}>{c.view}</Button>}
          </div>
        )}
      </div>
      {compact && onAccept && <Button size="sm" variant={urgent ? 'danger' : 'primary'} onClick={onAccept} style={{ alignSelf: 'center' }}>{c.take}</Button>}
    </div>
  );
}
