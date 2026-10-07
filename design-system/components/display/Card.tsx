import React from 'react';

export type CardVariant = 'outlined' | 'elevated' | 'flat' | 'selected';

/**
 * Primary surface for grouping content in the panel and landing.
 * White surface, 1px sand border, shadow-xs. Selected = mint fill + teal-300 border. No colored left-border accents.
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'style'> {
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const PAD = { none: '0', sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' } as const;

export function Card({ variant = 'outlined', padding = 'md', title, subtitle, actions, footer, children, onClick, style, ...rest }: CardProps) {
  const pad = PAD[padding] ?? PAD.md;
  const v: React.CSSProperties = {
    outlined: { background: 'var(--surface-card)', border: 'var(--border-w) solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' },
    elevated: { background: 'var(--surface-raised)', border: 'var(--border-w) solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
    flat: { background: 'var(--surface-subtle)', border: 'var(--border-w) solid transparent' },
    selected: { background: 'var(--surface-selected)', border: 'var(--border-w) solid var(--teal-300)' },
  }[variant];
  return (
    <section onClick={onClick} {...rest} style={{ borderRadius: 'var(--radius-lg)', ...v, overflow: 'hidden', minWidth: 0, cursor: onClick ? 'pointer' : undefined, ...style }}>
      {(title || actions) && (
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, paddingTop: pad, paddingInline: pad }}>
          <div style={{ minWidth: 0 }}>
            {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 17, lineHeight: 'var(--text-md-lh)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{title}</h3>}
            {subtitle && <p style={{ marginTop: 2, marginBottom: 0, fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-muted)' }}>{subtitle}</p>}
          </div>
          {actions && <div style={{ display: 'flex', gap: 8, flex: 'none' }}>{actions}</div>}
        </header>
      )}
      <div style={{ padding: pad }}>{children}</div>
      {footer && <footer style={{ paddingBlock: 14, paddingInline: pad, borderTop: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>{footer}</footer>}
    </section>
  );
}
