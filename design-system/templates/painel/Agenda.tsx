import React from 'react';
import { WeekCalendar, Tabs, Button, IconButton, Card, StatusBadge, Avatar, Dialog, TimeSlots, Icon, Badge, AppointmentCard, type IconName, type Locale, type ToastProps, type WeekCalendarAppointment } from '../../index';
import { FC_DATA as D, type Professional, type ProfessionalId } from './data';

const DETAIL_W = 300;
const WEEK_MIN_W = 640;
const ES_DAYS: Record<string, string> = { Seg: 'Lun', Ter: 'Mar', Qua: 'Mié', Qui: 'Jue', Sex: 'Vie' };

interface DetailProps { a: WeekCalendarAppointment; prof: Professional; locale: Locale; onConfirm: () => void; onReschedule: () => void; onCancel: () => void }

function Detail({ a, prof, locale, onConfirm, onReschedule, onCancel }: DetailProps) {
  const es = locale === 'es-ES';
  const day = D.days.find((d) => d.key === a.day);
  const row = (icon: IconName, label: string, val: string) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span style={{ color: 'var(--text-subtle)', paddingTop: 2 }}><Icon name={icon} size={18} /></span>
      <div><div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{label}</div><div style={{ fontSize: 'var(--text-ui-size)', fontWeight: 500, color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{val}</div></div>
    </div>
  );
  const cancelled = a.status === 'cancelled';
  return (
    <Card padding="md" style={{ position: 'sticky', top: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar name={a.patient} size={48} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-strong)' }}>{a.patient}</div>
            <div style={{ marginTop: 4, display: 'flex', gap: 6, flexWrap: 'wrap' }}><StatusBadge status={a.status || 'confirmed'} locale={locale} size="sm" />{a.byAgent && <Badge tone="ai" size="sm" icon="sparkles">{es ? 'Agendada por IA' : 'Agendada pela IA'}</Badge>}</div>
          </div>
        </div>
        {row('calendar', es ? 'Fecha' : 'Data', `${day?.label} ${day?.date}/10 · ${a.start}–${a.end}`)}
        {row('stethoscope', es ? 'Servicio' : 'Serviço', a.service || '—')}
        {row('user-round', es ? 'Profesional' : 'Profissional', prof.name)}
        {row('whatsapp', 'WhatsApp', '+55 11 98765-4321')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 }}>
          {a.status === 'pending' && <Button iconLeft="check" fullWidth onClick={onConfirm}>Marcar como confirmada</Button>}
          <Button variant="secondary" iconLeft="repeat" fullWidth onClick={onReschedule} disabled={cancelled}>{es ? 'Reprogramar' : 'Remarcar'}</Button>
          <Button variant="ghost" iconLeft="calendar-x" fullWidth onClick={onCancel} disabled={cancelled} style={{ color: cancelled ? undefined : 'var(--danger-text)' }}>{es ? 'Cancelar cita' : 'Cancelar consulta'}</Button>
        </div>
      </div>
    </Card>
  );
}

export interface AgendaProps { locale: Locale; toast: (t: ToastProps) => void }

export function Agenda({ locale, toast }: AgendaProps) {
  const es = locale === 'es-ES';
  const [prof, setProf] = React.useState<ProfessionalId>('ana');
  const [view, setView] = React.useState<'dia' | 'semana'>('semana');
  const [appts, setAppts] = React.useState(D.appointments);
  const [sel, setSel] = React.useState('a3');
  const [dlg, setDlg] = React.useState<null | 'resched' | 'cancel'>(null);
  const [slot, setSlot] = React.useState('10:30');
  const list = appts[prof];
  const cur = list.find((a) => a.id === sel) || list[0];
  const P = D.professionals.find((p) => p.id === prof) as Professional;
  const update = (patch: Partial<WeekCalendarAppointment>) => setAppts((s) => ({ ...s, [prof]: s[prof].map((a) => (a.id === cur.id ? { ...a, ...patch } : a)) }));
  const days = D.days.map((d) => ({ ...d, label: es ? ES_DAYS[d.label] : d.label }));
  return (
    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <Tabs value={prof} onChange={(p) => { setProf(p); setSel(appts[p][0].id); }} items={D.professionals.map((p) => ({ id: p.id, label: p.name, count: appts[p.id].filter((a) => a.day === 'ter').length }))} style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconButton icon="chevron-left" label="Semana anterior" variant="secondary" size="sm" />
          <span style={{ fontSize: 'var(--text-sm-size)', fontWeight: 600, color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums', minWidth: 120, textAlign: 'center' }}>13 – 17 {es ? 'oct' : 'out'} 2026</span>
          <IconButton icon="chevron-right" label={es ? 'Semana siguiente' : 'Próxima semana'} variant="secondary" size="sm" />
          <Tabs variant="segmented" size="sm" value={view} onChange={setView} items={[{ id: 'dia', label: es ? 'Día' : 'Dia' }, { id: 'semana', label: 'Semana' }]} style={{ marginLeft: 8 }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `minmax(0,1fr) ${DETAIL_W}px`, gap: 20, alignItems: 'start' }}>
        {view === 'semana'
          ? <div style={{ overflowX: 'auto', minWidth: 0 }}><WeekCalendar style={{ minWidth: WEEK_MIN_W }} days={days} appointments={list} startHour={8} endHour={18} hourHeight={52} now="10:40" selectedId={cur && cur.id} onSelect={(a) => setSel(a.id)} /></div>
          : <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{list.filter((a) => a.day === 'ter').map((a) => <AppointmentCard key={a.id} time={a.start} endTime={a.end} patient={a.patient} service={a.service} professional={P.name} status={a.status} bookedByAgent={a.byAgent} locale={locale} selected={cur && a.id === cur.id} onClick={() => setSel(a.id)} />)}</div>}
        {cur && <Detail a={cur} prof={P} locale={locale} onConfirm={() => { update({ status: 'confirmed' }); toast({ tone: 'success', title: es ? 'Cita confirmada' : 'Consulta confirmada' }); }} onReschedule={() => setDlg('resched')} onCancel={() => setDlg('cancel')} />}
      </div>
      {dlg === 'resched' && (
        <Dialog title={es ? `Reprogramar a ${cur.patient}` : `Remarcar ${cur.patient}`} description={es ? 'Elige un horario libre. Enviaremos la nueva fecha por WhatsApp.' : 'Escolha um horário livre. Vamos enviar a nova data pelo WhatsApp.'} icon="repeat" onClose={() => setDlg(null)} width={520}
          actions={<><Button variant="ghost" onClick={() => setDlg(null)}>{es ? 'Volver' : 'Voltar'}</Button><Button iconLeft="send" onClick={() => { update({ status: 'rescheduled', start: slot }); setDlg(null); toast({ tone: 'success', title: es ? 'Cita reprogramada' : 'Consulta remarcada', description: es ? `${cur.patient} recibió la nueva fecha por WhatsApp.` : `${cur.patient} recebeu a nova data no WhatsApp.` }); }}>{es ? 'Reprogramar y avisar' : 'Remarcar e avisar'}</Button></>}>
          <TimeSlots value={slot} onChange={setSlot} columns={4} groups={[{ label: es ? 'Mañana' : 'Manhã', slots: ['08:00', { time: '09:00', available: false }, { time: '10:30', suggested: true }, '11:00'] }, { label: 'Tarde', slots: ['14:00', { time: '15:00', available: false }, { time: '16:30', suggested: true }, '17:00'] }]} />
        </Dialog>
      )}
      {dlg === 'cancel' && (
        <Dialog tone="danger" icon="calendar-x" title={es ? '¿Cancelar la cita?' : 'Cancelar consulta?'} description={es ? `Avisaremos a ${cur.patient} por WhatsApp y liberaremos el horario.` : `Vamos avisar ${cur.patient} pelo WhatsApp e liberar o horário.`} onClose={() => setDlg(null)}
          actions={<><Button variant="ghost" onClick={() => setDlg(null)}>{es ? 'Volver' : 'Voltar'}</Button><Button variant="danger" onClick={() => { update({ status: 'cancelled' }); setDlg(null); toast({ tone: 'info', title: es ? 'Cita cancelada' : 'Consulta cancelada', description: es ? 'El horario quedó libre.' : 'O horário ficou livre.' }); }}>{es ? 'Cancelar cita' : 'Cancelar consulta'}</Button></>} />
      )}
    </div>
  );
}
