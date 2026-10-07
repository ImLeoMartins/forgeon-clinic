import React from 'react';
import { IconButton } from '../actions/IconButton';
import { Icon, type IconName } from '../icons/Icon';

/** Modal for focused decisions — cancel appointment, confirm handoff. 40% navy scrim, radius-xl, shadow-lg. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  icon?: IconName;
  tone?: 'default' | 'danger' | 'ai';
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  /** Position absolute inside parent (for previews) */
  inline?: boolean;
}

export function Dialog({ open = true, title, description, icon, tone = 'default', children, actions, onClose, width = 480, inline = false }: DialogProps) {
  if (!open) return null;
  const iconTone = { default: ['var(--teal-50)', 'var(--teal-700)'], danger: ['var(--danger-surface)', 'var(--danger-text)'], ai: ['var(--ai-surface)', 'var(--ai-accent-text)'] }[tone];
  return (
    <div onClick={onClose} style={{ position: inline ? 'absolute' : 'fixed', inset: 0, background: 'var(--overlay-scrim)', display: 'grid', placeItems: 'center', padding: 'var(--space-6)', zIndex: 1000 }}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: width, background: 'var(--surface-raised)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: 28, boxSizing: 'border-box', position: 'relative' }}>
        {onClose && <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} style={{ position: 'absolute', top: 16, right: 16 }} />}
        {icon && <span style={{ width: 44, height: 44, borderRadius: 14, background: iconTone[0], color: iconTone[1], display: 'grid', placeItems: 'center', marginBottom: 16 }}><Icon name={icon} size={22} /></span>}
        {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 'var(--text-lg-lh)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-strong)', paddingRight: 'var(--space-8)' }}>{title}</h2>}
        {description && <p style={{ marginTop: 6, marginBottom: 0, fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', color: 'var(--text-muted)', textWrap: 'pretty' }}>{description}</p>}
        {children && <div style={{ marginTop: 20 }}>{children}</div>}
        {actions && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>{actions}</div>}
      </div>
    </div>
  );
}
