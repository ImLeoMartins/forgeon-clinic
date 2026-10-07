import React from 'react';
import { Icon } from '../../icons/Icon';
import { transition, useForcedState } from '../../utils/interactive';

export type TimeSlot = string | { time: string; available?: boolean; suggested?: boolean };

interface SlotProps { time: string; available: boolean; selected: boolean; suggested?: boolean; onSelect?: (time: string) => void }

function Slot({ time, available, selected, onSelect, suggested }: SlotProps) {
  const [hoverState, setHover] = React.useState(false);
  const forced = useForcedState();
  const hover = forced?.hover ?? hoverState;
  const off = !available;
  return (
    <button type="button" disabled={off} aria-pressed={selected} onClick={() => onSelect && onSelect(time)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', height: 'var(--touch-comfort)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-text)', fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums',
        border: `var(--border-w) solid ${selected ? 'var(--action-primary)' : off ? 'transparent' : hover ? 'var(--teal-400)' : 'var(--border-default)'}`,
        background: selected ? 'var(--action-primary)' : off ? 'var(--bg-sunken)' : hover ? 'var(--teal-50)' : 'var(--surface-card)',
        color: selected ? 'var(--text-on-primary)' : off ? 'var(--text-subtle)' : 'var(--text-strong)', textDecoration: off ? 'line-through' : 'none', cursor: off ? 'not-allowed' : 'pointer', transition }}>
      {time}
      {suggested && !selected && !off && <span title="Sugerido pela IA" style={{ position: 'absolute', top: -7, right: -5, width: 18, height: 18, borderRadius: 'var(--radius-pill)', background: 'var(--ai-surface)', color: 'var(--ai-accent-text)', display: 'grid', placeItems: 'center', boxShadow: 'var(--ring-surface)' }}><Icon name="sparkles" size={11} strokeWidth={2.25} /></span>}
    </button>
  );
}

/**
 * Grid of bookable time slots (48px targets).
 * `suggested` shows a small AI sparkle. Unavailable slots are struck through and disabled.
 */
export interface TimeSlotsProps {
  slots?: TimeSlot[];
  groups?: Array<{ label: string; slots: TimeSlot[] }>;
  value?: string;
  onChange?: (time: string) => void;
  columns?: number;
  style?: React.CSSProperties;
}

export function TimeSlots({ slots = [], value, onChange, columns = 4, groups, style }: TimeSlotsProps) {
  const grid = (list: TimeSlot[]) => (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 8 }}>
      {list.map((s) => { const o = typeof s === 'string' ? { time: s, available: true } : s; return <Slot key={o.time} time={o.time} suggested={'suggested' in o ? o.suggested : undefined} available={o.available !== false} selected={value === o.time} onSelect={onChange} />; })}
    </div>
  );
  if (groups) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, ...style }}>
        {groups.map((g) => (
          <div key={g.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 'var(--text-overline-track)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{g.label}</span>
            {grid(g.slots)}
          </div>
        ))}
      </div>
    );
  }
  return <div style={style}>{grid(slots)}</div>;
}
