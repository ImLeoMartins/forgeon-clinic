import React from 'react';
import { Icon } from '../../icons/Icon';
import type { AppointmentStatus } from '../../utils/interactive';

const ST: Record<AppointmentStatus, [string, string, string]> = {
  confirmed: ['var(--teal-50)', 'var(--teal-800)', 'var(--teal-200)'],
  pending: ['var(--warning-surface)', 'var(--warning-text)', 'var(--amber-200)'],
  cancelled: ['var(--sand-100)', 'var(--text-muted)', 'var(--border-default)'],
  noshow: ['var(--danger-surface)', 'var(--danger-text)', 'var(--danger-border)'],
  rescheduled: ['var(--ai-surface)', 'var(--ai-accent-text)', 'var(--ai-border)'],
};
const toMin = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const GUTTER_W = 56;

export interface WeekCalendarDay { key: string; label: string; date: string | number; isToday?: boolean; blocked?: Array<{ start: string; end: string; label?: string }> }
export interface WeekCalendarAppointment { id: string; day: string; start: string; end: string; patient: string; service?: string; status?: AppointmentStatus; byAgent?: boolean }

/**
 * Week grid of appointments for one professional (agenda view).
 * Events tinted by status; `byAgent` shows a sparkle. `blocked` draws hatched lunch/unavailable ranges.
 */
export interface WeekCalendarProps {
  days: WeekCalendarDay[];
  appointments: WeekCalendarAppointment[];
  startHour?: number;
  endHour?: number;
  hourHeight?: number;
  /** "10:40" — draws the now line on today */
  now?: string;
  onSelect?: (appt: WeekCalendarAppointment) => void;
  selectedId?: string;
  style?: React.CSSProperties;
}

export function WeekCalendar({ days = [], appointments = [], startHour = 8, endHour = 19, hourHeight = 56, now, onSelect, selectedId, style }: WeekCalendarProps) {
  const hours = Array.from({ length: endHour - startHour }, (_, i) => startHour + i);
  const total = (endHour - startHour) * hourHeight;
  const cols = `${GUTTER_W}px repeat(${days.length}, minmax(0, 1fr))`;
  return (
    <div style={{ background: 'var(--surface-card)', border: 'var(--border-w) solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', fontFamily: 'var(--font-text)', ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: cols, borderBottom: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
        <div />
        {days.map((d) => (
          <div key={d.key} style={{ paddingBlock: 10, paddingInline: 'var(--space-2)', display: 'flex', alignItems: 'baseline', gap: 6, borderLeft: 'var(--border-w) solid var(--border-subtle)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: d.isToday ? 'var(--teal-700)' : 'var(--text-muted)' }}>{d.label}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, fontVariantNumeric: 'tabular-nums', color: d.isToday ? 'var(--text-on-primary)' : 'var(--text-strong)', background: d.isToday ? 'var(--action-primary)' : 'transparent', borderRadius: 'var(--radius-sm)', paddingInline: d.isToday ? 6 : 0, lineHeight: 'var(--text-h4-lh)' }}>{d.date}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: cols, position: 'relative' }}>
        <div style={{ position: 'relative', height: total }}>
          {hours.map((h, i) => <span key={h} style={{ position: 'absolute', top: i * hourHeight - 7, right: 8, fontSize: 12, color: 'var(--text-subtle)', fontVariantNumeric: 'tabular-nums', display: i === 0 ? 'none' : 'block' }}>{String(h).padStart(2, '0')}:00</span>)}
        </div>
        {days.map((d) => (
          <div key={d.key} style={{ position: 'relative', height: total, borderLeft: 'var(--border-w) solid var(--border-subtle)', background: d.isToday ? 'var(--calendar-today-tint)' : 'transparent' }}>
            {hours.map((h, i) => <div key={h} style={{ position: 'absolute', left: 0, right: 0, top: i * hourHeight, borderTop: i ? 'var(--border-w) solid var(--border-subtle)' : 0 }} />)}
            {d.blocked && d.blocked.map((b, i) => { const t = (toMin(b.start) - startHour * 60) / 60 * hourHeight; const hgt = (toMin(b.end) - toMin(b.start)) / 60 * hourHeight; return <div key={i} style={{ position: 'absolute', left: 0, right: 0, top: t, height: hgt, background: 'var(--pattern-blocked)', display: 'flex', alignItems: 'flex-start', padding: 6, fontSize: 11.5, color: 'var(--text-subtle)', boxSizing: 'border-box' }}>{b.label}</div>; })}
            {appointments.filter((a) => a.day === d.key).map((a) => {
              const top = (toMin(a.start) - startHour * 60) / 60 * hourHeight;
              const h = Math.max(24, (toMin(a.end) - toMin(a.start)) / 60 * hourHeight);
              const [bg, fg, bd] = ST[a.status || 'confirmed'] || ST.confirmed;
              const sel = selectedId === a.id;
              return (
                <button key={a.id} type="button" onClick={() => onSelect && onSelect(a)}
                  style={{ position: 'absolute', left: 4, right: 4, top: top + 2, height: h - 4, boxSizing: 'border-box', textAlign: 'left', cursor: 'pointer', overflow: 'hidden',
                    background: bg, color: fg, border: `var(--border-w) solid ${sel ? 'var(--teal-600)' : bd}`, borderRadius: 10, paddingBlock: 5, paddingInline: 'var(--space-2)', fontFamily: 'inherit',
                    boxShadow: sel ? 'var(--ring-selected)' : 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, fontVariantNumeric: 'tabular-nums', opacity: .85, display: 'flex', alignItems: 'center', gap: 4 }}>{a.start}{a.byAgent && <Icon name="sparkles" size={11} color="var(--ai-accent-text)" />}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.31, fontWeight: 600, color: a.status === 'cancelled' ? 'var(--text-muted)' : 'var(--text-strong)', textDecoration: a.status === 'cancelled' ? 'line-through' : 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.patient}</span>
                  {h > 52 && a.service && <span style={{ fontSize: 12, lineHeight: 'var(--text-overline-lh)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.service}</span>}
                </button>
              );
            })}
            {now && d.isToday && (
              <div style={{ position: 'absolute', left: -1, right: 0, top: (toMin(now) - startHour * 60) / 60 * hourHeight, height: 0, borderTop: 'var(--border-w-strong) solid var(--danger)', zIndex: 2 }}>
                <span style={{ position: 'absolute', left: -5, top: -6, width: 10, height: 10, borderRadius: 'var(--radius-pill)', background: 'var(--danger)' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
