import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { useInteractive, transition } from '../utils/interactive';

const SZ = { sm: [36, 18], md: [44, 20], lg: [52, 22] } as const;

export type IconButtonVariant = 'ghost' | 'secondary' | 'primary' | 'soft';

/** Square icon-only action. `label` is required — it becomes aria-label and title. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  icon: IconName;
  label: string;
  variant?: IconButtonVariant;
  /** sm 36 · md 44 · lg 52 px */
  size?: 'sm' | 'md' | 'lg';
  /** true = dot; number/string = count */
  badge?: boolean | number | string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function IconButton({ icon, label, variant = 'ghost', size = 'md', badge, disabled = false, onClick, style, ...rest }: IconButtonProps) {
  const [h, s] = useInteractive(disabled);
  const [box, ic] = SZ[size] || SZ.md;
  const map: Record<IconButtonVariant, { bg: string; fg: string; bd: string }> = {
    ghost: { bg: s.hover ? 'var(--surface-hover)' : 'transparent', fg: 'var(--text-muted)', bd: 'transparent' },
    secondary: { bg: s.hover ? 'var(--surface-hover)' : 'var(--surface-card)', fg: 'var(--text-body)', bd: 'var(--border-default)' },
    primary: { bg: s.hover ? 'var(--action-primary-hover)' : 'var(--action-primary)', fg: 'var(--text-on-primary)', bd: 'transparent' },
    soft: { bg: s.hover ? 'var(--action-primary-subtle-hover)' : 'var(--action-primary-subtle)', fg: 'var(--teal-700)', bd: 'transparent' },
  };
  const p = map[variant] || map.ghost;
  const dot = badge === true;
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} {...h} {...rest}
      style={{ position: 'relative', width: box, height: box, flex: 'none', display: 'inline-grid', placeItems: 'center', borderRadius: 'var(--radius-md)',
        border: `var(--border-w) solid ${p.bd}`, background: p.bg, color: s.hover && variant === 'ghost' ? 'var(--text-strong)' : p.fg, cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, boxShadow: s.focus ? 'var(--focus-ring)' : 'none', transform: s.press ? 'scale(0.96)' : 'none', transition, outline: 'none', padding: 0, ...style }}>
      <Icon name={icon} size={ic} />
      {badge != null && badge !== false && (
        <span style={{ position: 'absolute', top: 4, right: 4, minWidth: dot ? 8 : 18, height: dot ? 8 : 18, paddingBlock: 0, paddingInline: dot ? 0 : 5, borderRadius: 'var(--radius-pill)',
          background: 'var(--danger)', color: 'var(--text-on-primary)', fontSize: 11, fontWeight: 700, lineHeight: 'var(--text-xs-lh)', fontVariantNumeric: 'tabular-nums', boxShadow: 'var(--ring-surface)', boxSizing: 'border-box' }}>{dot ? '' : badge}</span>
      )}
    </button>
  );
}
