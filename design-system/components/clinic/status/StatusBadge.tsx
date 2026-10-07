import { Badge } from '../../display/Badge';
import type { AppointmentStatus, Locale } from '../../utils/interactive';

export const statusLabels: Record<Locale, Record<AppointmentStatus, string>> = {
  'pt-BR': { confirmed: 'Confirmada', pending: 'Pendente', cancelled: 'Cancelada', noshow: 'Faltou', rescheduled: 'Remarcada' },
  'es-ES': { confirmed: 'Confirmada', pending: 'Pendiente', cancelled: 'Cancelada', noshow: 'No asistió', rescheduled: 'Reprogramada' },
};

/**
 * Appointment status pill with dot, localized. Status is never color-only (dot + label).
 * pt-BR: Confirmada · Pendente · Cancelada · Faltou · Remarcada. es-ES: Confirmada · Pendiente · Cancelada · No asistió · Reprogramada.
 */
export interface StatusBadgeProps {
  status: AppointmentStatus;
  locale?: Locale;
  label?: string;
  size?: 'sm' | 'md';
}

export function StatusBadge({ status = 'pending', locale = 'pt-BR', label, size = 'md' }: StatusBadgeProps) {
  const text = label || (statusLabels[locale] || statusLabels['pt-BR'])[status];
  return (
    <Badge size={size} dot style={{ background: `var(--status-${status}-bg)`, color: `var(--status-${status})`, textDecoration: status === 'cancelled' ? 'none' : undefined }}>{text}</Badge>
  );
}
