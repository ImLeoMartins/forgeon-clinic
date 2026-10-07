import React from 'react';
import { Icon } from '../../icons/Icon';
import { StatusBadge } from '../status/StatusBadge';
import type { AppointmentStatus, Locale } from '../../utils/interactive';

/**
 * Appointment summary row/card — today list, patient history, confirmations.
 * Time block on the left (tabular, Manrope 800). `compact` for sidebars. `cancelled` strikes the time.
 */
export interface AppointmentCardProps {
  time: string;
  endTime?: string;
  /** Short date label above time, e.g. "QUI" */
  date?: string;
  patient: string;
  service?: string;
  professional?: string;
  room?: string;
  status?: AppointmentStatus;
  locale?: Locale;
  bookedByAgent?: boolean;
  viaWhatsApp?: boolean;
  actions?: React.ReactNode;
  compact?: boolean;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function AppointmentCard({ time, endTime, date, patient, service, professional, room, status = 'confirmed', locale = 'pt-BR', bookedByAgent = false, viaWhatsApp = true, actions, compact = false, selected = false, onClick, style }: AppointmentCardProps) {
  const muted = status === 'cancelled';
  return (
    <article onClick={onClick} style={{ display: 'flex', gap: compact ? 12 : 16, alignItems: 'stretch', padding: compact ? 'var(--space-3)' : 'var(--space-4)', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box',
      background: selected ? 'var(--surface-selected)' : 'var(--surface-card)', border: `var(--border-w) solid ${selected ? 'var(--teal-300)' : 'var(--border-subtle)'}`, boxShadow: 'var(--shadow-xs)', cursor: onClick ? 'pointer' : undefined, minWidth: 0, ...style }}>
      <div style={{ flex: 'none', width: compact ? 60 : 72, borderRadius: 'var(--radius-md)', background: muted ? 'var(--sand-100)' : 'var(--teal-50)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBlock: 'var(--space-2)', paddingInline: 'var(--space-1)', gap: 2 }}>
        {date && <span style={{ fontSize: 11.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: muted ? 'var(--text-muted)' : 'var(--teal-700)' }}>{date}</span>}
        <span style={{ fontFamily: 'var(--font-display)', fontSize: compact ? 17 : 20, lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', color: muted ? 'var(--text-muted)' : 'var(--teal-800)', textDecoration: muted ? 'line-through' : 'none' }}>{time}</span>
        {endTime && <span style={{ fontSize: 12, color: muted ? 'var(--text-subtle)' : 'var(--teal-700)', fontVariantNumeric: 'tabular-nums' }}>{endTime}</span>}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: compact ? 2 : 4, justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: compact ? 15 : 16, lineHeight: 'var(--text-ui-lh)', fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{patient}</span>
          <StatusBadge status={status} locale={locale} size="sm" />
        </div>
        <span style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-body)' }}>{service}{professional && <span style={{ color: 'var(--text-muted)' }}> · {professional}</span>}</span>
        {!compact && (bookedByAgent || viaWhatsApp || room) && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2, flexWrap: 'wrap' }}>
            {viaWhatsApp && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="whatsapp" size={13} color="var(--whatsapp-text)" />WhatsApp</span>}
            {bookedByAgent && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--ai-accent-text)', fontWeight: 600 }}><Icon name="sparkles" size={13} />{locale === 'es-ES' ? 'Agendada por IA' : 'Agendada pela IA'}</span>}
            {room && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="map-pin" size={13} />{room}</span>}
          </span>
        )}
      </div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 'none' }}>{actions}</div>}
    </article>
  );
}
