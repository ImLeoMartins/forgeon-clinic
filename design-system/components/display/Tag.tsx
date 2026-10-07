import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { useInteractive, transition } from '../utils/interactive';

/** Filter chip / removable tag (36px). Clickable when `onClick` is set; removable when `onRemove` is set. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  icon?: IconName;
  count?: number;
  style?: React.CSSProperties;
}

export function Tag({ children, selected = false, onClick, onRemove, icon, count, style }: TagProps) {
  const [h, s] = useInteractive(!onClick);
  const css: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 6, height: 36, paddingBlock: 0, paddingLeft: onRemove ? 'var(--space-3)' : 14, paddingRight: onRemove ? 6 : 14, borderRadius: 'var(--radius-pill)', boxSizing: 'border-box',
    border: `var(--border-w) solid ${selected ? 'var(--teal-300)' : 'var(--border-default)'}`, background: selected ? 'var(--surface-selected)' : s.hover ? 'var(--surface-hover)' : 'var(--surface-card)',
    color: selected ? 'var(--teal-700)' : 'var(--text-body)', fontFamily: 'var(--font-text)', fontSize: 'var(--text-sm-size)', fontWeight: 500, cursor: onClick ? 'pointer' : 'default',
    boxShadow: s.focus ? 'var(--focus-ring)' : 'none', transition, outline: 'none', whiteSpace: 'nowrap', ...style };
  const content = (
    <>
      {icon && <Icon name={icon} size={16} />}
      {children}
      {count != null && <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: 12, fontWeight: 600, color: selected ? 'var(--teal-700)' : 'var(--text-muted)' }}>{count}</span>}
      {onRemove && (
        <span role="button" tabIndex={0} aria-label="Remover" onClick={(e) => { e.stopPropagation(); onRemove(); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onRemove(); } }}
          style={{ display: 'grid', placeItems: 'center', width: 24, height: 24, borderRadius: 'var(--radius-pill)', color: 'var(--text-muted)', cursor: 'pointer' }}>
          <Icon name="x" size={14} />
        </span>
      )}
    </>
  );
  if (onClick) return <button type="button" onClick={onClick} aria-pressed={selected} {...h} style={css}>{content}</button>;
  return <span {...h} style={css}>{content}</span>;
}
