import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { transition } from '../utils/interactive';

export interface TabItem { id: string; label: string; icon?: IconName; count?: number; urgent?: boolean }

/** Section switcher — underline for page sections, segmented for view toggles (Dia/Semana). */
export interface TabsProps<T extends string = string> {
  items: Array<TabItem & { id: T }>;
  value: T;
  onChange?: (id: T) => void;
  variant?: 'underline' | 'segmented';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function Tabs<T extends string = string>({ items = [], value, onChange, variant = 'underline', size = 'md', style }: TabsProps<T>) {
  const seg = variant === 'segmented';
  return (
    <div role="tablist" style={{ display: 'flex', gap: seg ? 2 : 4, padding: seg ? 'var(--space-1)' : 0, background: seg ? 'var(--bg-sunken)' : 'transparent', borderRadius: seg ? 'var(--radius-md)' : 0,
      borderBottom: seg ? 'none' : 'var(--border-w) solid var(--border-subtle)', width: seg ? 'fit-content' : undefined, ...style }}>
      {items.map((it) => {
        const on = it.id === value;
        return (
          <button key={it.id} role="tab" aria-selected={on} type="button" onClick={() => onChange && onChange(it.id)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: seg ? (size === 'sm' ? 32 : 36) : 44, paddingBlock: 0, paddingInline: seg ? 14 : 'var(--space-3)', border: 0, cursor: 'pointer',
              background: seg && on ? 'var(--surface-card)' : 'transparent', borderRadius: seg ? 'var(--radius-sm)' : 0, boxShadow: seg && on ? 'var(--shadow-sm)' : 'none',
              color: on ? (seg ? 'var(--text-strong)' : 'var(--teal-700)') : 'var(--text-muted)', fontFamily: 'var(--font-text)', fontSize: size === 'sm' ? 13 : 14, fontWeight: 600,
              borderBottom: seg ? 0 : `var(--border-w-strong) solid ${on ? 'var(--accent-brand)' : 'transparent'}`, marginBottom: seg ? 0 : -1, transition, whiteSpace: 'nowrap' }}>
            {it.icon && <Icon name={it.icon} size={16} />}
            {it.label}
            {it.count != null && <span style={{ minWidth: 20, height: 20, paddingInline: 6, borderRadius: 'var(--radius-pill)', boxSizing: 'border-box', display: 'inline-grid', placeItems: 'center', fontSize: 12, fontVariantNumeric: 'tabular-nums',
              background: it.urgent ? 'var(--danger)' : on ? 'var(--teal-50)' : 'var(--sand-200)', color: it.urgent ? 'var(--text-on-primary)' : on ? 'var(--teal-700)' : 'var(--text-muted)' }}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
