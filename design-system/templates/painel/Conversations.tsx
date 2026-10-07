import React from 'react';
import { ConversationItem, ChatBubble, Button, IconButton, Icon, Badge, Tabs, Input, Avatar, StatusBadge, HandoffAlert, type Locale, type ToastProps } from '../../index';
import { FC_DATA as D, type Conversation, type Message } from './data';

const WIDE_BREAKPOINT = 1100;
const COLS_WIDE = 'minmax(16.25rem,20rem) minmax(22.5rem,1fr) minmax(0,17.5rem)';
const COLS_NARROW = 'minmax(15rem,17.5rem) minmax(22.5rem,1fr)';
const GRID_MIN_W = 640;

function Composer({ disabled, onSend, locale, onTake }: { disabled: boolean; onSend: (text: string) => void; locale: Locale; onTake: () => void }) {
  const es = locale === 'es-ES';
  const [v, setV] = React.useState('');
  if (disabled) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBlock: 14, paddingInline: 'var(--space-5)', borderTop: 'var(--border-w) solid var(--border-subtle)', background: 'var(--ai-surface)' }}>
        <Icon name="sparkles" size={18} color="var(--ai-accent-text)" />
        <span style={{ flex: 1, fontSize: 'var(--text-sm-size)', color: 'var(--text-body)' }}>{es ? 'El agente IA está atendiendo esta conversación.' : 'O agente IA está cuidando desta conversa.'}</span>
        <Button size="sm" variant="secondary" iconLeft="headset" onClick={onTake}>{es ? 'Atender yo' : 'Assumir conversa'}</Button>
      </div>
    );
  }
  const send = () => { if (!v.trim()) return; onSend(v.trim()); setV(''); };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBlock: 'var(--space-3)', paddingInline: 'var(--space-4)', borderTop: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-card)' }}>
      <IconButton icon="paperclip" label={es ? 'Adjuntar' : 'Anexar'} />
      <IconButton icon="file-text" label={es ? 'Plantillas' : 'Modelos'} />
      <input value={v} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') send(); }} placeholder={es ? 'Escribe un mensaje…' : 'Escreva uma mensagem…'}
        style={{ flex: 1, height: 'var(--control-h-md)', borderRadius: 'var(--radius-md)', border: 'var(--border-w) solid var(--border-default)', paddingBlock: 0, paddingInline: 14, font: 'inherit', fontSize: 'var(--text-ui-size)', background: 'var(--surface-subtle)', color: 'var(--text-strong)', outline: 'none' }} />
      <Button iconLeft="send" onClick={send}>Enviar</Button>
    </div>
  );
}

export interface ConversationsProps { locale: Locale; initialId?: string; toast: (t: ToastProps) => void; onResolveHandoff?: (id: string) => void }

export function Conversations({ locale, initialId, toast, onResolveHandoff }: ConversationsProps) {
  const es = locale === 'es-ES';
  const [convs, setConvs] = React.useState<Conversation[]>(D.conversations);
  const [id, setId] = React.useState(initialId || 'c1');
  const [filter, setFilter] = React.useState<'todas' | 'humano' | 'ia' | 'recepcao'>('todas');
  const c = convs.find((x) => x.id === id) as Conversation;
  const scroller = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => { if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight; }, [id, c.messages.length]);
  const patch = (p: Partial<Conversation>) => setConvs((s) => s.map((x) => (x.id === id ? { ...x, ...p } : x)));
  const take = () => {
    patch({ urgent: false, handledBy: 'human', unread: 0, messages: [...c.messages, { from: 'system', text: (es ? 'Carla asumió la conversación · ' : 'Carla assumiu a conversa · ') + '09:19' }] });
    if (onResolveHandoff) onResolveHandoff(id);
    toast({ tone: 'success', title: es ? 'Conversación asumida' : 'Você assumiu a conversa', description: es ? 'El agente queda en pausa para este paciente.' : 'O agente fica em pausa para este paciente.' });
  };
  const send = (text: string) => patch({ messages: [...c.messages, { from: 'human', author: 'Carla', text, time: '09:20', status: 'sent' } as Message], preview: text, time: '09:20' });
  const shown = convs.filter((x) => filter === 'todas' || (filter === 'humano' ? x.urgent : filter === 'ia' ? !x.urgent && x.handledBy === 'agent' : x.handledBy === 'human' && !x.urgent));
  const human = c.handledBy === 'human' && !c.urgent;
  const root = React.useRef<HTMLDivElement>(null);
  const [w, setW] = React.useState(0);
  React.useLayoutEffect(() => {
    const el = root.current; if (!el) return;
    const m = () => setW(el.clientWidth); m();
    const ro = new ResizeObserver(m); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const showAside = w >= WIDE_BREAKPOINT;
  return (
    <div ref={root} style={{ height: '100%', minHeight: 0, overflowX: 'auto' }}>
    <div style={{ display: 'grid', gridTemplateColumns: showAside ? COLS_WIDE : COLS_NARROW, height: '100%', minHeight: 0, minWidth: GRID_MIN_W }}>
      <div style={{ borderRight: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-card)', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <div style={{ paddingTop: 'var(--space-4)', paddingInline: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Input iconLeft="search" placeholder="Buscar paciente…" size="sm" />
          <Tabs size="sm" value={filter} onChange={setFilter} items={[{ id: 'todas', label: 'Todas' }, { id: 'humano', label: es ? 'Espera' : 'Aguardando', count: convs.filter((x) => x.urgent).length || undefined, urgent: true }, { id: 'ia', label: 'IA' }, { id: 'recepcao', label: es ? 'Recepción' : 'Recepção' }]} />
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-2)', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {shown.map((x) => <ConversationItem key={x.id} name={x.name} preview={x.preview} time={x.time} unread={x.unread} handledBy={x.handledBy} urgent={x.urgent} locale={locale} selected={x.id === id} onClick={() => { setId(x.id); setConvs((s) => s.map((y) => (y.id === x.id && !y.urgent ? { ...y, unread: 0 } : y))); }} />)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, background: 'var(--chat-wallpaper)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBlock: 'var(--space-3)', paddingInline: 'var(--space-5)', background: 'var(--surface-card)', borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
          <Avatar name={c.name} size={40} />
          <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div><div style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', overflow: 'hidden' }}><Icon name="whatsapp" size={13} color="var(--whatsapp-text)" />{c.phone}</div></div>
          {c.urgent ? <Badge tone="danger" icon="hand">{es ? 'Espera humano' : 'Aguarda humano'}</Badge> : human ? <Badge tone="teal" icon="headset">{es ? 'Recepción' : 'Recepção'}</Badge> : <Badge tone="ai" icon="sparkles">Agente IA</Badge>}
          <IconButton icon="ellipsis-vertical" label={es ? 'Más' : 'Mais'} />
        </div>
        {c.urgent && <div style={{ paddingTop: 'var(--space-3)', paddingInline: 'var(--space-5)' }}><HandoffAlert urgency="urgent" compact={showAside} locale={locale} title={es ? 'El agente pidió ayuda humana' : 'O agente pediu ajuda humana'} reason={c.reason} waiting={es ? 'hace 4 min' : 'há 4 min'} onAccept={take} /></div>}
        <div ref={scroller} style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {c.messages.map((m, i) => (
            <ChatBubble key={i} from={m.from} text={m.text} time={m.time} status={m.status} author={m.author} locale={locale}>
              {m.slots && <div style={{ display: 'flex', gap: 6 }}>{m.slots.map((t) => <span key={t} style={{ paddingBlock: 6, paddingInline: 10, borderRadius: 10, background: 'var(--surface-card)', border: 'var(--border-w) solid var(--teal-200)', fontWeight: 600, fontSize: 'var(--text-sm-size)', color: 'var(--teal-700)', fontVariantNumeric: 'tabular-nums' }}>{t}</span>)}</div>}
            </ChatBubble>
          ))}
        </div>
        <Composer disabled={!human} onTake={take} onSend={send} locale={locale} />
      </div>
      {showAside && <aside style={{ borderLeft: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-card)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', paddingTop: 'var(--space-2)' }}>
          <Avatar name={c.name} size={64} />
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-strong)' }}>{c.name}</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Paciente de {c.professional}</div>
        </div>
        <div style={{ padding: 14, borderRadius: 14, background: 'var(--surface-subtle)', border: 'var(--border-w) solid var(--border-subtle)' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 'var(--text-overline-track)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{es ? 'Próxima cita' : 'Próxima consulta'}</div>
          <div style={{ marginTop: 6, fontSize: 'var(--text-ui-size)', fontWeight: 600, color: 'var(--text-strong)', fontVariantNumeric: 'tabular-nums' }}>{c.next}</div>
          <div style={{ marginTop: 8 }}><StatusBadge status="confirmed" locale={locale} size="sm" /></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button variant="secondary" iconLeft="calendar-plus" fullWidth>{es ? 'Nueva cita' : 'Nova consulta'}</Button>
          <Button variant="ghost" iconLeft="user" fullWidth>Ver ficha</Button>
        </div>
      </aside>}
    </div>
    </div>
  );
}
