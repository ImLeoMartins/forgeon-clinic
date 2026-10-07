import React from 'react';
import { Logo, Button, Icon, Badge, ChatBubble, Tabs, Card, Dialog, Input, Select, type IconName, type Locale } from '../../index';
import type { SiteCopy } from './copy';

const CONTAINER_MAX = 1200;
const W: React.CSSProperties = { maxWidth: CONTAINER_MAX, marginInline: 'auto', paddingInline: 'var(--space-8)', boxSizing: 'border-box' };
const SECTION_Y = 'var(--section-y)';
const H2: React.CSSProperties = { fontSize: 'var(--text-h1-size)', lineHeight: 'var(--text-h1-lh)', fontWeight: 700, letterSpacing: 'var(--text-h1-track)' };
const CHAT_MAX = 440;

export function SiteNav({ c, locale, setLocale, onCta }: { c: SiteCopy; locale: Locale; setLocale: (l: Locale) => void; onCta: () => void }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'var(--surface-nav-translucent)', backdropFilter: 'var(--backdrop-nav)', WebkitBackdropFilter: 'var(--backdrop-nav)', borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
      <div style={{ ...W, height: 72, display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo size={28} />
        <nav style={{ display: 'flex', gap: 28, flex: 1 }}>{c.nav.map((n, i) => <a key={n} href={'#s' + i} style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: 'var(--text-ui-size)', fontWeight: 500, whiteSpace: 'nowrap' }}>{n}</a>)}</nav>
        <button type="button" onClick={() => setLocale(locale === 'pt-BR' ? 'es-ES' : 'pt-BR')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, paddingBlock: 0, paddingInline: 10, border: 0, background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-text)', fontWeight: 500, fontSize: 'var(--text-sm-size)', color: 'var(--text-body)' }}><Icon name="globe" size={18} />{locale === 'pt-BR' ? 'PT' : 'ES'}</button>
        <Button variant="ghost">{c.login}</Button>
        <Button onClick={onCta}>{c.cta}</Button>
      </div>
    </header>
  );
}

function ChatPreview({ c, locale }: { c: SiteCopy; locale: Locale }) {
  return (
    <div style={{ width: '100%', maxWidth: CHAT_MAX, borderRadius: 28, background: 'var(--surface-card)', boxShadow: 'var(--shadow-lg)', border: 'var(--border-w) solid var(--border-subtle)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBlock: 14, paddingInline: 18, borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
        <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-pill)', background: 'var(--teal-50)', display: 'grid', placeItems: 'center' }}><Logo variant="symbol" size={20} /></span>
        <div style={{ flex: 1 }}><div style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 'var(--text-ui-size)' }}>{c.chat.name}</div><div style={{ fontSize: 12.5, color: 'var(--whatsapp-text)', display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="whatsapp" size={12} />{c.chat.status}</div></div>
      </div>
      <div style={{ background: 'var(--chat-wallpaper)', padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ChatBubble from="patient" text={c.chat.p1} time="10:02" />
        <ChatBubble from="agent" locale={locale} text={c.chat.a1} time="10:02" status="read">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{c.chat.slots.map((s, i) => <span key={s} style={{ paddingBlock: 6, paddingInline: 10, borderRadius: 10, background: i === 1 ? 'var(--action-primary)' : 'var(--surface-card)', color: i === 1 ? 'var(--text-on-primary)' : 'var(--teal-700)', border: 'var(--border-w) solid var(--teal-200)', fontWeight: 600, fontSize: 13.5, fontVariantNumeric: 'tabular-nums' }}>{s}</span>)}</div>
        </ChatBubble>
        <ChatBubble from="patient" text={c.chat.p2} time="10:03" />
        <ChatBubble from="agent" locale={locale} showLabel={false} text={c.chat.a2} time="10:03" status="read" />
      </div>
    </div>
  );
}

export function Hero({ c, locale, onCta }: { c: SiteCopy; locale: Locale; onCta: () => void }) {
  return (
    <section style={{ ...W, display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)', gap: 'var(--space-16)', alignItems: 'center', paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-24)' }}>
      <div>
        <Badge tone="ai" icon="sparkles">{c.eyebrow}</Badge>
        <h1 style={{ marginTop: 20, fontSize: 'var(--text-display-size)', lineHeight: 'var(--text-display-lh)', fontWeight: 800, letterSpacing: 'var(--text-display-track)', textWrap: 'balance' }}>{c.h1}</h1>
        <p style={{ marginTop: 20, marginBottom: 0, fontSize: 19, lineHeight: 'var(--text-h3-lh)', color: 'var(--text-muted)', maxWidth: 540, textWrap: 'pretty' }}>{c.lead}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}><Button size="lg" iconRight="arrow-right" onClick={onCta}>{c.cta}</Button><Button size="lg" variant="whatsapp">{c.ctaWa}</Button></div>
        <div style={{ marginTop: 16, fontSize: 'var(--text-sm-size)', color: 'var(--text-muted)' }}>{c.note}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: '8% 4% -4% 10%', borderRadius: 40, background: 'var(--teal-50)' }} />
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}><ChatPreview c={c} locale={locale} /></div>
      </div>
    </section>
  );
}

export function How({ c }: { c: SiteCopy }) {
  return (
    <section id="s0" style={{ background: 'var(--surface-card)', borderTop: 'var(--border-w) solid var(--border-subtle)', borderBottom: 'var(--border-w) solid var(--border-subtle)' }}>
      <div style={{ ...W, paddingBlock: SECTION_Y }}>
        <h2 style={H2}>{c.howTitle}</h2>
        <p style={{ marginTop: 10, marginBottom: 0, fontSize: 'var(--text-lg-size)', color: 'var(--text-muted)' }}>{c.howLead}</p>
        <ol style={{ listStyle: 'none', padding: 0, marginTop: 48, marginBottom: 0, display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24 }}>
          {c.how.map(([ic, t, d], i) => (
            <li key={t} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--teal-50)', color: 'var(--teal-700)', display: 'grid', placeItems: 'center' }}><Icon name={ic} size={24} /></span><span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-ui-size)', color: 'var(--text-subtle)', fontVariantNumeric: 'tabular-nums' }}>0{i + 1}</span></div>
              <h3 style={{ fontSize: 20, lineHeight: 'var(--text-lg-lh)', fontWeight: 700 }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 'var(--text-h4-lh)', color: 'var(--text-muted)', textWrap: 'pretty' }}>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ForWhom({ c }: { c: SiteCopy }) {
  const [tab, setTab] = React.useState<'d' | 'p'>('d');
  const items = tab === 'd' ? c.dental : c.psych;
  const icons: IconName[] = tab === 'd' ? ['bell-ring', 'calendar-days', 'shield-check'] : ['heart-handshake', 'repeat', 'lock'];
  return (
    <section id="s1" style={{ ...W, paddingBlock: SECTION_Y }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <h2 style={{ ...H2, maxWidth: 560 }}>{c.forTitle}</h2>
        <Tabs variant="segmented" value={tab} onChange={setTab} items={[{ id: 'd', label: c.tabs[0], icon: 'smile' }, { id: 'p', label: c.tabs[1], icon: 'brain' }]} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20, marginTop: 40 }}>
        {items.map(([t, d], i) => (
          <Card key={t} variant="elevated" padding="lg">
            <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: tab === 'd' ? 'var(--teal-50)' : 'var(--ai-surface)', color: tab === 'd' ? 'var(--teal-700)' : 'var(--ai-accent-text)', display: 'grid', placeItems: 'center' }}><Icon name={icons[i]} size={22} /></span>
            <h3 style={{ marginTop: 20, fontSize: 19, lineHeight: 'var(--text-h4-lh)', fontWeight: 700 }}>{t}</h3>
            <p style={{ marginTop: 8, marginBottom: 0, fontSize: 15.5, lineHeight: 'var(--text-md-lh)', color: 'var(--text-muted)' }}>{d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Pricing({ c, onCta }: { c: SiteCopy; onCta: () => void }) {
  return (
    <section id="s2" style={{ background: 'var(--surface-card)', borderTop: 'var(--border-w) solid var(--border-subtle)' }}>
      <div style={{ ...W, paddingBlock: SECTION_Y }}>
        <div style={{ textAlign: 'center' }}><h2 style={H2}>{c.priceTitle}</h2><p style={{ marginTop: 10, marginBottom: 0, fontSize: 'var(--text-lg-size)', color: 'var(--text-muted)' }}>{c.priceLead}</p></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20, marginTop: 48, alignItems: 'stretch' }}>
          {c.plans.map(([n, p, per, feats, hi]) => {
            const last = n === c.plans[2][0];
            return (
              <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 28, borderRadius: 'var(--radius-xl)', background: hi ? 'var(--teal-900)' : 'var(--surface-card)', color: hi ? 'var(--text-on-primary)' : undefined, border: hi ? 'var(--border-w) solid var(--teal-900)' : 'var(--border-w) solid var(--border-default)', boxShadow: hi ? 'var(--shadow-lg)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: hi ? 'var(--text-on-primary)' : 'var(--text-strong)' }}>{n}</span>{hi && <Badge tone="brand" size="sm">{c.popular}</Badge>}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1-size)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums', color: hi ? 'var(--text-on-primary)' : 'var(--text-strong)' }}>{p}</span><span style={{ fontSize: 'var(--text-ui-size)', color: hi ? 'var(--teal-100)' : 'var(--text-muted)' }}>{per}</span></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>{feats.map((f) => <li key={f} style={{ display: 'flex', gap: 10, fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', color: hi ? 'var(--teal-50)' : 'var(--text-body)' }}><Icon name="check" size={18} color={hi ? 'var(--teal-200)' : 'var(--teal-600)'} />{f}</li>)}</ul>
                <Button fullWidth size="lg" variant={hi ? 'secondary' : last ? 'ghost' : 'soft'} onClick={onCta} style={last ? { border: 'var(--border-w) solid var(--border-default)' } : undefined}>{last ? c.talk : c.choose}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Faq({ c }: { c: SiteCopy }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="s3" style={{ ...W, paddingBlock: SECTION_Y, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)', gap: 48 }}>
      <h2 style={H2}>{c.faqTitle}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {c.faq.map(([q, a], i) => (
          <div key={q} style={{ borderBottom: 'var(--border-w) solid var(--border-default)' }}>
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, paddingBlock: 22, paddingInline: 0, border: 0, background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 'var(--text-lg-size)', lineHeight: 'var(--text-h4-lh)', color: 'var(--text-strong)' }}>
              <span style={{ flex: 1 }}>{q}</span><Icon name={open === i ? 'minus' : 'plus'} size={20} color="var(--teal-600)" />
            </button>
            {open === i && <p style={{ marginTop: 0, marginBottom: 22, fontSize: 16, lineHeight: 'var(--text-h4-lh)', color: 'var(--text-muted)', maxWidth: 620 }}>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCta({ c, onCta }: { c: SiteCopy; onCta: () => void }) {
  return (
    <section style={{ ...W, paddingBottom: SECTION_Y }}>
      <div style={{ borderRadius: 32, background: 'var(--teal-700)', paddingBlock: 'var(--space-16)', paddingInline: 56, display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 320 }}><h2 style={{ ...H2, color: 'var(--text-on-primary)', fontWeight: 800, textWrap: 'balance' }}>{c.finalTitle}</h2><p style={{ marginTop: 12, marginBottom: 0, fontSize: 'var(--text-lg-size)', lineHeight: 'var(--text-lg-lh)', color: 'var(--teal-50)' }}>{c.finalLead}</p></div>
        <div style={{ display: 'flex', gap: 12 }}><Button size="lg" variant="secondary" iconRight="arrow-right" onClick={onCta}>{c.cta}</Button><Button size="lg" variant="whatsapp">{c.ctaWa}</Button></div>
      </div>
    </section>
  );
}

export function Footer({ c }: { c: SiteCopy }) {
  const cols = [['Painel', 'Agente IA', 'Preços'], ['Forgeon', 'Contato', 'Carreiras'], ['Privacidade', 'Termos', 'LGPD / RGPD']];
  return (
    <footer style={{ borderTop: 'var(--border-w) solid var(--border-subtle)', background: 'var(--surface-card)' }}>
      <div style={{ ...W, paddingBlock: 'var(--space-12)', display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Logo variant="endorsed" size={32} /><span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{c.rights}</span></div>
        {c.footer.map((h, i) => <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 'var(--text-overline-track)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{h}</span>{cols[i].map((l) => <a key={l} href="#" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: 'var(--text-ui-size)' }}>{l}</a>)}</div>)}
      </div>
    </footer>
  );
}

export function DemoDialog({ c, onClose }: { c: SiteCopy; onClose: () => void }) {
  const [sent, setSent] = React.useState(false);
  if (sent) return <Dialog icon="circle-check" title={c.form.ok} description={c.form.okd} onClose={onClose} actions={<Button onClick={onClose}>OK</Button>} />;
  return (
    <Dialog title={c.form.title} description={c.form.desc} icon="calendar-check" onClose={onClose} width={520}
      actions={<Button size="lg" fullWidth onClick={() => setSent(true)}>{c.form.send}</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Input label={c.form.name} /><Input label={c.form.clinic} />
        <Input label={c.form.phone} iconLeft="whatsapp" placeholder="+55 11 90000-0000" /><Select label={c.form.type} options={c.tabs} />
      </div>
    </Dialog>
  );
}
