import React from 'react';
import { Icon } from '../../icons/Icon';
import { Avatar } from '../../display/Avatar';
import { StatusBadge } from '../status/StatusBadge';
import { useForcedState, type AppointmentStatus, type Locale } from '../../utils/interactive';

const HEAD: Record<Locale, string[]> = {
  'pt-BR': ['Paciente', 'Profissional', 'Última consulta', 'Próxima consulta', 'Status', 'Canal'],
  'es-ES': ['Paciente', 'Profesional', 'Última cita', 'Próxima cita', 'Estado', 'Canal'],
};
const EMPTY: Record<Locale, string> = { 'pt-BR': 'Nenhum paciente encontrado.', 'es-ES': 'Ningún paciente encontrado.' };

export interface PatientRow { id?: string; name: string; phone?: string; professional?: string; lastVisit?: string; next?: string; status?: AppointmentStatus; channel?: 'whatsapp' | 'phone' }

function Row({ r, locale, onClick, selected }: { r: PatientRow; locale: Locale; onClick?: () => void; selected: boolean }) {
  const [hoverState, setHover] = React.useState(false);
  const hover = useForcedState()?.hover ?? hoverState;
  const td: React.CSSProperties = { paddingBlock: 'var(--space-3)', paddingInline: 'var(--space-4)', borderTop: 'var(--border-w) solid var(--border-subtle)', fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-body)', verticalAlign: 'middle', whiteSpace: 'nowrap' };
  const phone = r.channel === 'phone';
  return (
    <tr onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ background: selected ? 'var(--surface-selected)' : hover ? 'var(--surface-hover)' : 'transparent', cursor: onClick ? 'pointer' : undefined }}>
      <td style={td}><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Avatar name={r.name} size={36} /><div><div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{r.name}</div><div style={{ fontSize: 13, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{r.phone}</div></div></div></td>
      <td style={td}>{r.professional}</td>
      <td style={{ ...td, fontVariantNumeric: 'tabular-nums', color: 'var(--text-muted)' }}>{r.lastVisit || '—'}</td>
      <td style={{ ...td, fontVariantNumeric: 'tabular-nums', fontWeight: r.next ? 600 : 400, color: r.next ? 'var(--text-strong)' : 'var(--text-subtle)' }}>{r.next || '—'}</td>
      <td style={td}>{r.status ? <StatusBadge status={r.status} locale={locale} size="sm" /> : <span style={{ color: 'var(--text-subtle)' }}>—</span>}</td>
      <td style={td}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}><Icon name={phone ? 'phone' : 'whatsapp'} size={16} color={phone ? undefined : 'var(--whatsapp-text)'} />{phone ? (locale === 'es-ES' ? 'Teléfono' : 'Telefone') : 'WhatsApp'}</span></td>
    </tr>
  );
}

/** Patients list table for the panel. 64px rows, sand header, tabular dates. Empty `rows` renders a localized empty row. */
export interface PatientTableProps {
  rows: PatientRow[];
  locale?: Locale;
  onRowClick?: (row: PatientRow) => void;
  selectedId?: string | null;
  /** Override the empty-state message */
  emptyLabel?: string;
  style?: React.CSSProperties;
}

export function PatientTable({ rows = [], locale = 'pt-BR', onRowClick, selectedId, emptyLabel, style }: PatientTableProps) {
  const h = HEAD[locale] || HEAD['pt-BR'];
  return (
    <div style={{ background: 'var(--surface-card)', border: 'var(--border-w) solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-text)' }}>
        <thead><tr>{h.map((x) => <th key={x} scope="col" style={{ textAlign: 'left', paddingBlock: 'var(--space-3)', paddingInline: 'var(--space-4)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)', background: 'var(--surface-subtle)', whiteSpace: 'nowrap' }}>{x}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => <Row key={r.id || r.name} r={r} locale={locale} selected={!!selectedId && selectedId === r.id} onClick={onRowClick ? () => onRowClick(r) : undefined} />)}
          {rows.length === 0 && (
            <tr><td colSpan={h.length} style={{ padding: 'var(--space-10)', textAlign: 'center', color: 'var(--text-muted)', fontSize: 'var(--text-sm-size)', borderTop: 'var(--border-w) solid var(--border-subtle)' }}>{emptyLabel || EMPTY[locale] || EMPTY['pt-BR']}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
