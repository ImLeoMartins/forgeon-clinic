import React from 'react';
import { Icon, type IconName } from '../../icons/Icon';

function Spark({ data, color }: { data: number[]; color: string }) {
  const w = 96, h = 32, min = Math.min(...data), max = Math.max(...data), r = max - min || 1;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - 3 - ((v - min) / r) * (h - 6)}`).join(' ');
  return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" style={{ display: 'block', overflow: 'visible' }}><polyline points={pts} fill="none" style={{ stroke: color }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

/**
 * Panel metric tile. Use pt-BR/es-ES number formatting (decimal comma).
 * `delta.good` overrides color (e.g. faltas ↓ is good).
 */
export interface KpiCardProps {
  label: string;
  value: string | number;
  unit?: string;
  delta?: { value: string; trend: 'up' | 'down'; good?: boolean };
  hint?: string;
  icon?: IconName;
  /** ai = indigo accent for agent-driven metrics */
  tone?: 'default' | 'ai';
  sparkline?: number[];
  style?: React.CSSProperties;
}

export function KpiCard({ label, value, unit, delta, hint, icon, tone = 'default', sparkline, style }: KpiCardProps) {
  const ai = tone === 'ai';
  const good = delta && (delta.good !== undefined ? delta.good : delta.trend === 'up');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box', minWidth: 0,
      background: 'var(--surface-card)', border: `var(--border-w) solid ${ai ? 'var(--ai-border)' : 'var(--border-subtle)'}`, boxShadow: 'var(--shadow-xs)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {icon && <span style={{ width: 32, height: 32, borderRadius: 10, display: 'grid', placeItems: 'center', background: ai ? 'var(--ai-surface)' : 'var(--teal-50)', color: ai ? 'var(--ai-accent-text)' : 'var(--teal-700)' }}><Icon name={icon} size={17} /></span>}
        <span style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', fontWeight: 500, color: 'var(--text-muted)' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-kpi-size)', lineHeight: 'var(--text-kpi-lh)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{value}</span>
          {unit && <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-muted)' }}>{unit}</span>}
        </div>
        {sparkline && <Spark data={sparkline} color={ai ? 'var(--ai-accent)' : 'var(--teal-500)'} />}
      </div>
      {(delta || hint) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, lineHeight: 'var(--text-xs-lh)' }}>
          {delta && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: good ? 'var(--success-text)' : 'var(--danger-text)' }}><Icon name={delta.trend === 'down' ? 'trending-down' : 'trending-up'} size={15} />{delta.value}</span>}
          {hint && <span style={{ color: 'var(--text-muted)' }}>{hint}</span>}
        </div>
      )}
    </div>
  );
}
