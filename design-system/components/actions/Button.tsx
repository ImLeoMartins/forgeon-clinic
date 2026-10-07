import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { useInteractive, transition, type InteractiveState } from '../utils/interactive';

const SIZES = {
  sm: { h: 'var(--control-h-sm)', px: 14, fs: 14, gap: 6, icon: 16 },
  md: { h: 'var(--control-h-md)', px: 18, fs: 15, gap: 8, icon: 18 },
  lg: { h: 'var(--control-h-lg)', px: 24, fs: 16, gap: 10, icon: 20 },
} as const;

export type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'danger' | 'whatsapp';

interface Palette { bg: string; fg: string; bd: string; sh?: string }

function palette(variant: ButtonVariant, s: InteractiveState): Palette {
  const v: Record<ButtonVariant, Palette> = {
    primary: { bg: s.press ? 'var(--action-primary-active)' : s.hover ? 'var(--action-primary-hover)' : 'var(--action-primary)', fg: 'var(--text-on-primary)', bd: 'transparent', sh: 'var(--shadow-xs)' },
    secondary: { bg: s.hover ? 'var(--surface-hover)' : 'var(--surface-card)', fg: 'var(--text-strong)', bd: s.hover ? 'var(--border-strong)' : 'var(--border-default)', sh: 'var(--shadow-xs)' },
    soft: { bg: s.hover ? 'var(--action-primary-subtle-hover)' : 'var(--action-primary-subtle)', fg: 'var(--teal-700)', bd: 'transparent' },
    ghost: { bg: s.hover ? 'var(--surface-hover)' : 'transparent', fg: 'var(--text-body)', bd: 'transparent' },
    danger: { bg: s.hover ? 'var(--danger-text)' : 'var(--danger)', fg: 'var(--text-on-primary)', bd: 'transparent', sh: 'var(--shadow-xs)' },
    whatsapp: { bg: s.hover ? 'var(--whatsapp-hover)' : 'var(--whatsapp)', fg: 'var(--text-on-whatsapp)', bd: 'transparent', sh: 'var(--shadow-xs)' },
  };
  return v[variant] || v.primary;
}

/**
 * Primary action control — one primary per view; secondary/ghost for the rest.
 * primary = teal-600 (AA on white). soft = teal-50 tint for in-card actions. danger only for destructive/urgent handoff.
 * whatsapp variant only on WhatsApp CTAs (auto icon). Labels are verbs: "Confirmar", "Remarcar", "Assumir conversa".
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'type'> {
  variant?: ButtonVariant;
  /** sm 36 · md 44 · lg 52 px */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button({ variant = 'primary', size = 'md', iconLeft, iconRight, fullWidth = false, disabled = false, loading = false, type = 'button', children, onClick, style, ...rest }: ButtonProps) {
  const [h, s] = useInteractive(disabled || loading);
  const z = SIZES[size] || SIZES.md;
  const p = palette(variant, s);
  return (
    <button type={type} disabled={disabled || loading} onClick={onClick} aria-busy={loading || undefined} {...h} {...rest}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, alignItems: 'center', justifyContent: 'center', gap: z.gap,
        height: z.h, paddingBlock: 0, paddingInline: z.px, borderRadius: 'var(--radius-md)', border: `var(--border-w) solid ${p.bd}`, background: p.bg, color: p.fg,
        fontFamily: 'var(--font-text)', fontSize: z.fs, fontWeight: 600, lineHeight: 1, letterSpacing: '-0.005em', whiteSpace: 'nowrap',
        cursor: disabled || loading ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, boxShadow: s.focus ? 'var(--focus-ring)' : (p.sh || 'none'),
        transform: s.press ? 'scale(0.98)' : 'none', transition, outline: 'none', ...style,
      }}>
      {loading ? <Icon name="refresh-cw" size={z.icon} style={{ animation: 'fc-spin 1s linear infinite' }} /> : iconLeft && <Icon name={iconLeft} size={z.icon} />}
      {variant === 'whatsapp' && !iconLeft && !loading && <Icon name="whatsapp" size={z.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={z.icon} />}
      {loading && <style>{'@keyframes fc-spin{to{transform:rotate(360deg)}}'}</style>}
    </button>
  );
}
