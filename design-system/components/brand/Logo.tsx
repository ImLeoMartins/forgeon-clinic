import React from 'react';
import { symbolViewBox, symbolPaths, nameViewBox, namePath } from './logoData';

export type LogoTone = 'color' | 'ink' | 'white';

const INK: Record<LogoTone, string> = { color: 'var(--ink-900)', ink: 'var(--ink-900)', white: 'var(--sand-0)' };

function LogoSymbol({ height, tone, id }: { height: number; tone: LogoTone; id: string }) {
  const fill = tone === 'color' ? `url(#${id})` : INK[tone];
  return (
    <svg viewBox={symbolViewBox} height={height} width={height * 643 / 623} style={{ display: 'block', flex: 'none' }} aria-hidden="true">
      {tone === 'color' && (
        <defs><linearGradient id={id} gradientUnits="userSpaceOnUse" x1="431" y1="925" x2="1054" y2="322">
          <stop offset="0" style={{ stopColor: 'var(--indigo-500)' }} /><stop offset="1" style={{ stopColor: 'var(--violet-500)' }} />
        </linearGradient></defs>
      )}
      {symbolPaths.map((d, i) => <path key={i} d={d} style={{ fill }} fillRule="evenodd" />)}
    </svg>
  );
}

/**
 * Forgeon Clinic brand mark — use in app headers, landing nav/footer, emails; never redraw the symbol.
 * Clear space ≥ 0.5× symbol height; minimum symbol 16px.
 */
export interface LogoProps {
  /** lockup = symbol + "Clinic"; endorsed adds "by FORGEON"; symbol = F only; forgeon = parent wordmark */
  variant?: 'lockup' | 'endorsed' | 'symbol' | 'forgeon';
  /** color = indigo→violet gradient symbol + ink text; ink = mono dark; white = for dark/teal grounds */
  tone?: LogoTone;
  /** Symbol height in px; text scales from it. Default 32 */
  size?: number;
  label?: string;
  style?: React.CSSProperties;
}

export function Logo({ variant = 'lockup', tone = 'color', size = 32, label = 'Forgeon Clinic', style }: LogoProps) {
  const id = 'fc-grad-' + React.useId().replace(/:/g, '');
  const text = INK[tone];
  if (variant === 'symbol') return <span role="img" aria-label={label} style={{ display: 'inline-flex', ...style }}><LogoSymbol height={size} tone={tone} id={id} /></span>;
  if (variant === 'forgeon') {
    return (
      <span role="img" aria-label="Forgeon" style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.4, ...style }}>
        <LogoSymbol height={size} tone={tone} id={id} />
        <svg viewBox={nameViewBox} height={size * 0.42} width={size * 0.42 * 1080 / 110} aria-hidden="true" style={{ display: 'block' }}><path d={namePath} style={{ fill: text }} /></svg>
      </span>
    );
  }
  const word = (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size * 0.8, lineHeight: 1, letterSpacing: '-0.025em', color: text, whiteSpace: 'nowrap' }}>Clinic</span>
  );
  const byColor = tone === 'white' ? 'var(--text-on-dark-muted)' : 'var(--ink-500)';
  return (
    <span role="img" aria-label={label} style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3, ...style }}>
      <LogoSymbol height={size} tone={tone} id={id} />
      {variant === 'endorsed' ? (
        <span style={{ display: 'inline-flex', flexDirection: 'column', gap: size * 0.14 }}>
          {word}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.12, fontFamily: 'var(--font-text)', fontSize: Math.max(9, size * 0.22), fontWeight: 500, color: byColor, letterSpacing: '.02em' }}>
            by
            <svg viewBox={nameViewBox} height={Math.max(7, size * 0.17)} width={Math.max(7, size * 0.17) * 1080 / 110} aria-hidden="true" style={{ display: 'block' }}><path d={namePath} style={{ fill: byColor }} /></svg>
          </span>
        </span>
      ) : word}
    </span>
  );
}
