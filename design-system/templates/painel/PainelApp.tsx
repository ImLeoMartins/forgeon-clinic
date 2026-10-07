import React from 'react';
import { Toast, type Locale, type ToastProps } from '../../index';
import { Sidebar, Topbar, type Screen } from './Shell';
import { Dashboard } from './Dashboard';
import { Agenda } from './Agenda';
import { Conversations } from './Conversations';
import { Patients, Templates } from './Patients';

const TITLES: Record<Screen, { pt: [string, string]; es: [string, string] }> = {
  inicio: { pt: ['Bom dia, Carla', 'Terça, 14 de outubro · Clínica Sorriso & Mente'], es: ['Buenos días, Carla', 'Martes, 14 de octubre · Clínica Sorriso & Mente'] },
  agenda: { pt: ['Agenda', 'Semana de 13 a 17 de outubro'], es: ['Agenda', 'Semana del 13 al 17 de octubre'] },
  conversas: { pt: ['Conversas', 'WhatsApp · atendidas pelo agente e pela recepção'], es: ['Conversaciones', 'WhatsApp · atendidas por el agente y la recepción'] },
  pacientes: { pt: ['Pacientes', '8 pacientes ativos'], es: ['Pacientes', '8 pacientes activos'] },
  mensagens: { pt: ['Mensagens', 'Modelos de WhatsApp e e-mail enviados pelo agente'], es: ['Plantillas', 'Mensajes de WhatsApp y e-mail que envía el agente'] },
};

/**
 * Clinic panel template — clickable shell with Início, Agenda, Conversas, Pacientes, Mensagens; PT/ES; light/dark.
 * Theme is scoped to this container via data-theme, so it can be embedded (showcase) or used full-page.
 */
export function PainelApp({ initialScreen = 'inicio', initialTheme = 'light', initialLocale = 'pt-BR', height = '100%' }: { initialScreen?: Screen; initialTheme?: 'light' | 'dark'; initialLocale?: Locale; height?: number | string }) {
  const [screen, setScreen] = React.useState<Screen>(initialScreen);
  const [locale, setLocale] = React.useState<Locale>(initialLocale);
  const [theme, setTheme] = React.useState<'light' | 'dark'>(initialTheme);
  const [agentOn, setAgentOn] = React.useState(true);
  const [handoffs, setHandoffs] = React.useState(1);
  const [convId, setConvId] = React.useState('c1');
  const [toast, setToast] = React.useState<ToastProps | null>(null);
  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 4500); return () => clearTimeout(t); }, [toast]);
  const t = TITLES[screen][locale === 'es-ES' ? 'es' : 'pt'];
  const es = locale === 'es-ES';
  const openConversation = (id: string) => { setConvId(id); setScreen('conversas'); };
  const onAgent = (v: boolean) => {
    setAgentOn(v);
    setToast({ tone: 'ai', title: v ? (es ? 'Agente activado' : 'Agente ativado') : (es ? 'Agente en pausa' : 'Agente pausado'), description: v ? undefined : (es ? 'Los mensajes nuevos irán a la recepción.' : 'Novas mensagens vão para a recepção.') });
  };
  return (
    <div data-theme={theme} lang={locale} style={{ position: 'relative', display: 'flex', height, background: 'var(--bg-app)', color: 'var(--text-body)', overflow: 'hidden' }}>
      <Sidebar screen={screen} setScreen={setScreen} locale={locale} agentOn={agentOn} setAgentOn={onAgent} handoffs={handoffs} theme={theme} />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Topbar title={t[0]} subtitle={t[1]} locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} />
        <div style={{ flex: 1, minHeight: 0, overflow: screen === 'conversas' ? 'hidden' : 'auto' }}>
          {screen === 'inicio' && <Dashboard locale={locale} go={setScreen} openConversation={openConversation} handoffs={handoffs} />}
          {screen === 'agenda' && <Agenda locale={locale} toast={setToast} />}
          {screen === 'conversas' && <Conversations key={convId} locale={locale} toast={setToast} initialId={convId} onResolveHandoff={(id) => { if (id === 'c1') setHandoffs(0); }} />}
          {screen === 'pacientes' && <Patients locale={locale} />}
          {screen === 'mensagens' && <Templates locale={locale} />}
        </div>
      </main>
      {toast && <div style={{ position: 'absolute', right: 24, bottom: 24, zIndex: 2000 }}><Toast tone={toast.tone} title={toast.title} description={toast.description} onClose={() => setToast(null)} /></div>}
    </div>
  );
}
