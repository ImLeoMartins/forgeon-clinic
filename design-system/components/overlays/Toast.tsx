import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { IconButton } from '../actions/IconButton';

export type ToastTone = 'info' | 'success' | 'warning' | 'danger' | 'ai';

const T: Record<ToastTone, [IconName, string]> = {
  info: ['info', 'var(--teal-600)'], success: ['circle-check', 'var(--success)'], warning: ['triangle-alert', 'var(--warning)'],
  danger: ['circle-alert', 'var(--danger)'], ai: ['sparkles', 'var(--ai-accent)'],
};

/** Transient confirmation — bottom-right in the panel, auto-dismiss ~5s. */
export interface ToastProps {
  tone?: ToastTone;
  title: string;
  description?: string;
  action?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

export function Toast({ tone = 'info', title, description, action, onClose, style }: ToastProps) {
  const [icon, color] = T[tone] || T.info;
  return (
    <div role="status" aria-live="polite" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, width: 380, maxWidth: '100%', boxSizing: 'border-box', paddingBlock: 14, paddingLeft: 'var(--space-4)', paddingRight: 'var(--space-3)',
      background: 'var(--surface-raised)', border: 'var(--border-w) solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', ...style }}>
      <span style={{ marginTop: 1 }}><Icon name={icon} size={20} color={color} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', fontWeight: 600, color: 'var(--text-strong)' }}>{title}</div>
        {description && <div style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-muted)', marginTop: 2 }}>{description}</div>}
        {action && <div style={{ marginTop: 8 }}>{action}</div>}
      </div>
      {onClose && <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} style={{ marginTop: -6 }} />}
    </div>
  );
}
