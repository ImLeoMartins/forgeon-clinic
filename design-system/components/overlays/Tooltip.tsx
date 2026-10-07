import React from 'react';

const GAP = 'calc(100% + var(--space-2))';

/** Short hover/focus hint for icon buttons and truncated data. */
export interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Force open (for previews) */
  open?: boolean;
  children: React.ReactNode;
}

export function Tooltip({ content, placement = 'top', open, children }: TooltipProps) {
  const [show, setShow] = React.useState(false);
  const vis = open !== undefined ? open : show;
  const pos: React.CSSProperties = {
    top: { bottom: GAP, left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: GAP, left: '50%', transform: 'translateX(-50%)' },
    right: { left: GAP, top: '50%', transform: 'translateY(-50%)' },
    left: { right: GAP, top: '50%', transform: 'translateY(-50%)' },
  }[placement];
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', ...pos, zIndex: 50, pointerEvents: 'none', whiteSpace: 'nowrap', paddingBlock: 7, paddingInline: 10, borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-inverse)', color: 'var(--text-inverse)', fontFamily: 'var(--font-text)', fontSize: 'var(--text-xs-size)', lineHeight: 'var(--text-xs-lh)', fontWeight: 500, boxShadow: 'var(--shadow-md)',
        opacity: vis ? 1 : 0, transition: 'opacity var(--duration-base) var(--ease-standard)' }}>{content}</span>
    </span>
  );
}
