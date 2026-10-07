import React from 'react';
import { PatientTable, Input, Tag, Button, Card, Switch, Badge, Icon, ChatBubble, type AppointmentStatus, type Locale } from '../../index';
import { FC_DATA as D, type MessageTemplate } from './data';

const SEARCH_W = 320;
const PREVIEW_W = 380;

export function Patients({ locale }: { locale: Locale }) {
  const es = locale === 'es-ES';
  const [q, setQ] = React.useState('');
  const [f, setF] = React.useState<'all' | AppointmentStatus>('all');
  const [sel, setSel] = React.useState<string | null>(null);
  const rows = D.patients.filter((p) => (f === 'all' || p.status === f) && p.name.toLowerCase().includes(q.toLowerCase()));
  const count = (s: AppointmentStatus) => D.patients.filter((p) => p.status === s).length;
  return (
    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ width: SEARCH_W }}><Input iconLeft="search" placeholder={es ? 'Buscar por nombre o teléfono' : 'Buscar por nome ou telefone'} value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1 }}>
          <Tag selected={f === 'all'} onClick={() => setF('all')} count={D.patients.length}>Todos</Tag>
          <Tag selected={f === 'pending'} onClick={() => setF('pending')} count={count('pending')}>{es ? 'Pendientes' : 'Pendentes'}</Tag>
          <Tag selected={f === 'noshow'} onClick={() => setF('noshow')} count={count('noshow')}>{es ? 'No asistieron' : 'Faltaram'}</Tag>
          <Tag selected={f === 'cancelled'} onClick={() => setF('cancelled')} count={count('cancelled')}>Canceladas</Tag>
        </div>
        <Button variant="secondary" iconLeft="download">Exportar</Button>
        <Button iconLeft="user-plus">{es ? 'Nuevo paciente' : 'Novo paciente'}</Button>
      </div>
      {/* Empty result is rendered by PatientTable itself (localized empty row). */}
      <PatientTable rows={rows} locale={locale} selectedId={sel} onRowClick={(r) => setSel(r.id || null)} />
    </div>
  );
}

function renderBody(body: string) {
  return body.split(/(\{\{[^}]+\}\})/g).map((part, i) => part.startsWith('{{')
    ? <code key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, background: 'var(--ai-surface)', color: 'var(--ai-accent-text)', paddingBlock: 1, paddingInline: 5, borderRadius: 'var(--radius-xs)' }}>{part}</code>
    : <span key={i}>{part}</span>);
}

const SAMPLE: Record<string, string> = { 'paciente.nome': 'Marina', 'paciente.nombre': 'Lucía', data: 'quarta, 15/10', fecha: 'miércoles 15/10', hora: '14:30', profissional: 'a Dra. Ana Lima', profesional: 'el Dr. Pablo Ruiz', 'clinica.endereco': 'Rua Harmonia, 120 · Vila Madalena' };
function fill(body: string) {
  return body.replace(/\{\{([^}]+)\}\}/g, (_, k: string) => SAMPLE[k] || k);
}

export function Templates({ locale }: { locale: Locale }) {
  const es = locale === 'es-ES';
  const [list, setList] = React.useState<MessageTemplate[]>(D.templates);
  const [id, setId] = React.useState('t1');
  const t = list.find((x) => x.id === id) as MessageTemplate;
  return (
    <div style={{ padding: 28, display: 'grid', gridTemplateColumns: `minmax(0,1fr) ${PREVIEW_W}px`, gap: 20, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.map((x) => (
          <Card key={x.id} variant={x.id === id ? 'selected' : 'outlined'} padding="sm" onClick={() => setId(x.id)}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-md)', display: 'grid', placeItems: 'center', background: x.channel === 'email' ? 'var(--teal-50)' : 'var(--whatsapp-surface)', color: x.channel === 'email' ? 'var(--teal-700)' : 'var(--whatsapp-text)' }}><Icon name={x.channel === 'email' ? 'mail' : 'whatsapp'} size={20} /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{x.name}</span>
                  <Badge size="sm">{x.lang}</Badge>
                  {!x.active && <Badge size="sm" tone="warning">{es ? 'Pausada' : 'Pausado'}</Badge>}
                </div>
                <div style={{ marginTop: 6, fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-ui-lh)', color: 'var(--text-body)' }}>{renderBody(x.body)}</div>
                <div style={{ marginTop: 6, fontSize: 12.5, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{x.sent} {es ? 'envíos en 30 días' : 'envios em 30 dias'}</div>
              </div>
              <div onClick={(e) => e.stopPropagation()}><Switch checked={x.active} onChange={(v) => setList((s) => s.map((y) => (y.id === x.id ? { ...y, active: v } : y)))} /></div>
            </div>
          </Card>
        ))}
      </div>
      <Card title={es ? 'Vista previa' : 'Pré-visualização'} subtitle={es ? 'Así lo verá el paciente' : 'Como o paciente vai ver'} style={{ position: 'sticky', top: 0 }}>
        <div style={{ background: 'var(--chat-wallpaper)', borderRadius: 14, padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 200 }}>
          <ChatBubble from="agent" locale={t.lang} text={fill(t.body)} time="18:00" status="read" />
          {t.id === 't1' && <ChatBubble from="patient" text="Confirmo, obrigada!" time="18:04" />}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}><Button variant="secondary" iconLeft="pencil" fullWidth>Editar</Button><Button variant="soft" iconLeft="send" fullWidth>{es ? 'Enviar prueba' : 'Enviar teste'}</Button></div>
      </Card>
    </div>
  );
}
