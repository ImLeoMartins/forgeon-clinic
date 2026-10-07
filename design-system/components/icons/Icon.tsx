import React from 'react';
import { iconPaths } from './iconData';

export type IconName = keyof typeof iconPaths;

/**
 * Rounded-stroke line icon (Lucide v0.468 set, copied in) — use for every UI glyph.
 * `whatsapp` is the filled Simple Icons glyph; use it only for WhatsApp.
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name' | 'color' | 'strokeWidth' | 'style' | 'ref'> {
  /** Lucide icon name (kebab-case) or "whatsapp" */
  name: IconName;
  size?: number;
  /** Default 1.75 — rounded stroke (use 2 at ≤14px) */
  strokeWidth?: number;
  color?: string;
  /** Accessible label; omit for decorative icons */
  title?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, size = 20, strokeWidth = 1.75, color = 'currentColor', title, style, ...rest }: IconProps) {
  const inner = iconPaths[name] || '';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true} aria-label={title} focusable="false"
      style={{ flex: 'none', display: 'block', color, ...style }} {...rest}
      dangerouslySetInnerHTML={{ __html: (title ? `<title>${title}</title>` : '') + inner }} />
  );
}

export const iconNames = Object.keys(iconPaths) as IconName[];
