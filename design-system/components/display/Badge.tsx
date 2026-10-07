import React from 'react';
import { Icon, type IconName } from '../icons/Icon';

export type BadgeTone = 'neutral' | 'teal' | 'success' | 'warning' | 'danger' | 'ai' | 'brand' | 'whatsapp' | 'solid';

export const badgeTones: Record<BadgeTone, { bg: string; fg: string }> = {
  neutral: { bg: 'var(--sand-100)', fg: 'var(--ink-600)' },
  teal: { bg: 'var(--teal-50)', fg: 'var(--teal-700)' },
  success: { bg: 'var(--success-surface)', fg: 'var(--success-text)' },
  warning: { bg: 'var(--warning-surface)', fg: 'var(--warning-text)' },
  danger: { bg: 'var(--danger-surface)', fg: 'var(--danger-text)' },
  ai: { bg: 'var(--ai-surface)', fg: 'var(--ai-accent-text)' },
  brand: { bg: 'var(--brand-gradient)', fg: 'var(--text-on-primary)' },
  whatsapp: { bg: 'var(--whatsapp-surface)', fg: 'var(--whatsapp-text)' },
  solid: { bg: 'var(--ink-900)', fg: 'var(--text-on-primary)' },
};

/** Small pill label for counts, categories, AI markers. `brand` (gradient) only for the occasional "Novo". */
export interface BadgeProps {
  tone?: BadgeTone;
  size?: 'sm' | 'md';
  dot?: boolean;
  icon?: IconName;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge({ tone = 'neutral', size = 'md', dot = false, icon, children, style }: BadgeProps) {
  const t = badgeTones[tone] || badgeTones.neutral;
  const sm = size === 'sm';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: sm ? 4 : 6, height: sm ? 22 : 26, paddingBlock: 0, paddingInline: sm ? 'var(--space-2)' : 10, borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, fontFamily: 'var(--font-text)', fontSize: sm ? 12 : 13, fontWeight: 600, lineHeight: 1, whiteSpace: 'nowrap', boxSizing: 'border-box', ...style }}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: 'var(--radius-pill)', background: 'currentColor', flex: 'none' }} />}
      {icon && <Icon name={icon} size={sm ? 12 : 14} strokeWidth={2} />}
      {children}
    </span>
  );
}
