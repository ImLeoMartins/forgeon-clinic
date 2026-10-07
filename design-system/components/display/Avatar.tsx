import React from 'react';

const TONES: Array<[string, string]> = [
  ['var(--teal-50)', 'var(--teal-700)'],
  ['var(--indigo-50)', 'var(--indigo-600)'],
  ['var(--amber-50)', 'var(--amber-700)'],
  ['var(--green-50)', 'var(--green-700)'],
  ['var(--red-50)', 'var(--red-700)'],
  ['var(--slate-50)', 'var(--ink-700)'],
];

export function initials(name = '') {
  const p = name.replace(/^(Dra?\.|Sr\.|Sra\.)\s*/i, '').trim().split(/\s+/);
  return ((p[0] || '')[0] || '').concat(p.length > 1 ? p[p.length - 1][0] : '').toUpperCase();
}

/** Initials (or photo) circle for patients and professionals. */
export interface AvatarProps {
  name?: string;
  src?: string;
  size?: number;
  /** 0–5 force a tone; otherwise hashed from name */
  tone?: number;
  status?: 'online' | 'away' | 'offline';
  style?: React.CSSProperties;
}

export function Avatar({ name = '', src, size = 40, tone, status, style }: AvatarProps) {
  const idx = tone != null ? tone : [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % TONES.length;
  const [bg, fg] = TONES[idx % TONES.length];
  const dot = status ? { online: 'var(--success)', away: 'var(--warning)', offline: 'var(--ink-300)' }[status] : undefined;
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', width: size, height: size, ...style }}>
      {src ? <img src={src} alt={name} style={{ width: size, height: size, borderRadius: 'var(--radius-pill)', objectFit: 'cover' }} />
        : <span aria-label={name} role="img" style={{ width: size, height: size, borderRadius: 'var(--radius-pill)', background: bg, color: fg, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: Math.round(size * 0.38), letterSpacing: '-0.01em' }}>{initials(name)}</span>}
      {dot && <span style={{ position: 'absolute', right: 0, bottom: 0, width: Math.max(8, size * 0.26), height: Math.max(8, size * 0.26), borderRadius: 'var(--radius-pill)', background: dot, boxShadow: 'var(--ring-surface)' }} />}
    </span>
  );
}
