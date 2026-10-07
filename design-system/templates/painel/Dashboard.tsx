import { KpiCard, HandoffAlert, AppointmentCard, Card, Button, IconButton, Icon, type IconName, type Locale } from '../../index';
import { FC_DATA as D } from './data';
import type { Screen } from './Shell';

export interface DashboardProps { locale: Locale; go: (s: Screen) => void; openConversation: (id: string) => void; handoffs: number }

const CONTENT_MAX = 1200;

export function Dashboard({ locale, go, openConversation, handoffs }: DashboardProps) {
  const es = locale === 'es-ES';
  const today = [...D.appointments.ana, ...D.appointments.paulo, ...D.appointments.julia].filter((a) => a.day === 'ter').sort((a, b) => a.start.localeCompare(b.start));
  const prof = (id: string) => (D.appointments.ana.some((a) => a.id === id) ? 'Dra. Ana Lima' : D.appointments.paulo.some((a) => a.id === id) ? 'Dr. Paulo Reis' : 'Dra. Júlia Prado');
  const activity: Array<[IconName, string, string]> = es
    ? [['calendar-check', 'Confirmó la cita de Helena Rocha', '18:22'], ['repeat', 'Reprogramó a Marina Souza para el viernes 10:30', '09:11'], ['hand', 'Pidió ayuda humana para Marcos Teixeira', '09:14'], ['bell', 'Envió 14 recordatorios para mañana', '08:00']]
    : [['calendar-check', 'Confirmou a consulta de Helena Rocha', '18:22'], ['repeat', 'Remarcou Marina Souza para sexta 10:30', '09:11'], ['hand', 'Pediu ajuda humana para Marcos Teixeira', '09:14'], ['bell', 'Enviou 14 lembretes para amanhã', '08:00']];
  return (
    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: CONTENT_MAX }}>
      {handoffs > 0 && (
        <HandoffAlert urgency="urgent" locale={locale} title={es ? 'Marcos Teixeira necesita a alguien del equipo' : 'Marcos Teixeira precisa de alguém da equipe'}
          reason={es ? 'Dolor y sangrado tras la extracción de ayer. El agente ya avisó al paciente.' : 'Dor e sangramento após a extração de ontem. O agente já avisou o paciente.'}
          quote={es ? 'Me duele bastante y sangra un poco' : 'Tá doendo bastante e sangrando um pouco'} patient="Marcos" waiting={es ? 'hace 4 min' : 'há 4 min'}
          onAccept={() => openConversation('c1')} onView={() => openConversation('c1')} />
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(14.375rem, 1fr))', gap: 16 }}>
        <KpiCard icon="calendar-days" label={es ? 'Citas hoy' : 'Consultas hoje'} value={today.length} hint={es ? '3 profesionales' : '3 profissionais'} />
        <KpiCard icon="calendar-check" label={es ? 'Tasa de confirmación' : 'Taxa de confirmação'} value="92,4" unit="%" delta={{ value: '+3,1 p.p.', trend: 'up' }} sparkline={[80, 84, 83, 88, 87, 90, 92]} />
        <KpiCard icon="user-x" label={es ? 'Ausencias (7 días)' : 'Faltas (7 dias)'} value="3" delta={{ value: '−40%', trend: 'down', good: true }} hint={es ? 'vs. semana pasada' : 'vs. semana passada'} />
        <KpiCard tone="ai" icon="sparkles" label={es ? 'Resueltas por la IA' : 'Resolvidas pela IA'} value="87" unit="%" delta={{ value: '+5%', trend: 'up' }} sparkline={[70, 72, 78, 80, 83, 85, 87]} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(21.25rem, 1fr))', gap: 20, alignItems: 'start' }}>
        <Card title={es ? 'Citas de hoy' : 'Consultas de hoje'} subtitle={es ? 'Martes, 14 de octubre' : 'Terça, 14 de outubro'} actions={<Button size="sm" variant="ghost" iconRight="arrow-right" onClick={() => go('agenda')}>Ver agenda</Button>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {today.map((a) => <AppointmentCard key={a.id} compact={false} time={a.start} endTime={a.end} patient={a.patient} service={a.service} professional={prof(a.id)} status={a.status} bookedByAgent={a.byAgent} locale={locale} actions={<IconButton icon="message-circle" label={es ? 'Abrir conversación' : 'Abrir conversa'} size="sm" onClick={() => go('conversas')} />} />)}
          </div>
        </Card>
        <Card title={es ? 'Actividad del agente' : 'Atividade do agente'} subtitle={es ? 'Últimas 24 h' : 'Últimas 24h'}>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {activity.map(([ic, t, h], i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 32, height: 32, flex: 'none', borderRadius: 10, display: 'grid', placeItems: 'center', background: ic === 'hand' ? 'var(--danger-surface)' : 'var(--ai-surface)', color: ic === 'hand' ? 'var(--danger-text)' : 'var(--ai-accent-text)' }}><Icon name={ic} size={16} /></span>
                <span style={{ flex: 1, fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', color: 'var(--text-body)', paddingTop: 6 }}>{t}</span>
                <span style={{ fontSize: 12.5, color: 'var(--text-subtle)', fontVariantNumeric: 'tabular-nums', paddingTop: 7 }}>{h}</span>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  );
}
