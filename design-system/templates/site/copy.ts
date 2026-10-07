import type { IconName, Locale } from '../../index';

export interface SiteCopy {
  nav: string[]; login: string; cta: string; eyebrow: string; h1: string; lead: string; ctaWa: string; note: string;
  chat: { name: string; status: string; p1: string; a1: string; p2: string; a2: string; slots: string[] };
  howTitle: string; howLead: string; how: Array<[IconName, string, string]>;
  forTitle: string; tabs: [string, string]; dental: Array<[string, string]>; psych: Array<[string, string]>;
  priceTitle: string; priceLead: string; plans: Array<[string, string, string, string[], boolean?]>;
  popular: string; choose: string; talk: string;
  faqTitle: string; faq: Array<[string, string]>;
  finalTitle: string; finalLead: string; footer: string[]; rights: string;
  form: { title: string; desc: string; name: string; clinic: string; phone: string; type: string; send: string; ok: string; okd: string };
}

export const FC_SITE_COPY: Record<Locale, SiteCopy> = {
  'pt-BR': {
    nav: ['Como funciona', 'Para quem', 'Preços', 'Dúvidas'], login: 'Entrar', cta: 'Agendar demonstração',
    eyebrow: 'Agente de IA no WhatsApp para clínicas',
    h1: 'Sua agenda cuidada, mesmo quando a recepção está ocupada.',
    lead: 'O Forgeon Clinic agenda, remarca e confirma consultas pelo WhatsApp, envia lembretes e passa para a sua equipe quando o paciente precisa de uma pessoa.',
    ctaWa: 'Falar no WhatsApp', note: '14 dias grátis · sem cartão · configuração em 1 dia',
    chat: { name: 'Clínica Sorriso & Mente', status: 'responde na hora', p1: 'Oi! Queria marcar uma limpeza. Tem horário essa semana?', a1: 'Oi, Pedro! Tem sim. Com o Dr. Paulo, estes horários estão livres:', p2: 'Quinta 10:30', a2: 'Pronto! Quinta, 16/10, às 10:30 com o Dr. Paulo. Te mando um lembrete na véspera.', slots: ['Qua 09:00', 'Qui 10:30', 'Sex 14:00'] },
    howTitle: 'Como funciona', howLead: 'Três passos, sem trocar o seu sistema.',
    how: [['messages-square', 'O paciente chama no WhatsApp', 'No número que a clínica já usa. O agente responde na hora, em português ou espanhol.'], ['calendar-check', 'O agente cuida da agenda', 'Mostra horários livres, agenda, remarca, cancela e confirma — direto na agenda de cada profissional.'], ['headset', 'Sua equipe entra quando precisa', 'Dor, urgência ou um assunto delicado? O agente avisa a recepção e passa a conversa com todo o contexto.']],
    forTitle: 'Feito para o dia a dia da sua clínica', tabs: ['Odontologia', 'Psicologia e terapias'],
    dental: [['Lembretes que reduzem faltas', 'Confirmação 24h antes, com remarcação em um toque.'], ['Agenda por cadeira e profissional', 'Clínico, ortodontia, endodontia — cada um com seus horários.'], ['Pós-procedimento com cuidado', 'Orientações após extração e alerta para a equipe se algo não estiver bem.']],
    psych: [['Acolhimento desde a primeira mensagem', 'Tom calmo e respeitoso, sem pressa e sem jargão.'], ['Sessões recorrentes', 'Mesmo dia e horário toda semana, com remarcação simples.'], ['Privacidade em primeiro lugar', 'O agente não pede detalhes clínicos e encaminha temas sensíveis para uma pessoa.']],
    priceTitle: 'Planos simples', priceLead: 'Preço por clínica, com profissionais ilimitados no plano Clínica.',
    plans: [['Essencial', 'R$ 249', '/mês', ['1 número de WhatsApp', 'Até 2 profissionais', 'Lembretes e confirmações', 'Painel com agenda e conversas']], ['Clínica', 'R$ 449', '/mês', ['Profissionais ilimitados', 'Atendimento humano integrado', 'Métricas de faltas e confirmações', 'Modelos de mensagem e e-mail'], true], ['Rede', 'Sob consulta', '', ['Várias unidades', 'Português e espanhol', 'Integrações com seu sistema', 'Gerente de conta']]],
    popular: 'Mais escolhido', choose: 'Começar teste grátis', talk: 'Falar com vendas',
    faqTitle: 'Dúvidas frequentes',
    faq: [['Preciso trocar meu número de WhatsApp?', 'Não. O agente funciona no número que sua clínica já usa, via WhatsApp Business.'], ['E se o paciente quiser falar com uma pessoa?', 'Ele pode pedir a qualquer momento. O agente avisa a recepção no painel e para de responder naquela conversa.'], ['Os dados dos pacientes ficam seguros?', 'Sim. Seguimos a LGPD e o RGPD, com dados criptografados e acesso por perfil.'], ['Funciona em espanhol?', 'Sim. O agente responde em português do Brasil e espanhol da Espanha, conforme o paciente escreve.']],
    finalTitle: 'Menos telefone tocando. Mais tempo para cuidar.', finalLead: 'Veja o agente funcionando com a agenda da sua clínica em 20 minutos.',
    footer: ['Produto', 'Empresa', 'Legal'], rights: '© 2026 Forgeon. Todos os direitos reservados.',
    form: { title: 'Agendar demonstração', desc: 'Respondemos em até 1 dia útil.', name: 'Seu nome', clinic: 'Nome da clínica', phone: 'WhatsApp', type: 'Especialidade', send: 'Enviar', ok: 'Recebemos seu pedido', okd: 'Vamos falar com você pelo WhatsApp em breve.' },
  },
  'es-ES': {
    nav: ['Cómo funciona', 'Para quién', 'Precios', 'Preguntas'], login: 'Entrar', cta: 'Solicitar demo',
    eyebrow: 'Agente de IA en WhatsApp para clínicas',
    h1: 'Tu agenda al día, aunque la recepción esté ocupada.',
    lead: 'Forgeon Clinic agenda, reprograma y confirma citas por WhatsApp, envía recordatorios y pasa la conversación a tu equipo cuando el paciente necesita a una persona.',
    ctaWa: 'Hablar por WhatsApp', note: '14 días gratis · sin tarjeta · configuración en 1 día',
    chat: { name: 'Clínica Dental Retiro', status: 'responde al momento', p1: 'Hola, quería pedir cita para una limpieza. ¿Tenéis hueco esta semana?', a1: 'Hola, Lucía. Sí. Con el Dr. Ruiz tengo estos horarios libres:', p2: 'Jueves 10:30', a2: 'Hecho. Jueves 16/10 a las 10:30 con el Dr. Ruiz. Te enviaré un recordatorio el día antes.', slots: ['Mié 09:00', 'Jue 10:30', 'Vie 14:00'] },
    howTitle: 'Cómo funciona', howLead: 'Tres pasos, sin cambiar tu sistema.',
    how: [['messages-square', 'El paciente escribe por WhatsApp', 'Al número que ya usa la clínica. El agente responde al momento, en español o portugués.'], ['calendar-check', 'El agente gestiona la agenda', 'Muestra huecos libres, agenda, reprograma, cancela y confirma en la agenda de cada profesional.'], ['headset', 'Tu equipo entra cuando hace falta', '¿Dolor, urgencia o un tema delicado? El agente avisa a recepción y le pasa la conversación con todo el contexto.']],
    forTitle: 'Pensado para el día a día de tu clínica', tabs: ['Odontología', 'Psicología y terapias'],
    dental: [['Recordatorios que reducen ausencias', 'Confirmación 24 h antes, con cambio de cita en un toque.'], ['Agenda por gabinete y profesional', 'General, ortodoncia, endodoncia — cada uno con sus horarios.'], ['Postoperatorio con cuidado', 'Indicaciones tras una extracción y aviso al equipo si algo no va bien.']],
    psych: [['Acogida desde el primer mensaje', 'Tono tranquilo y respetuoso, sin prisas ni tecnicismos.'], ['Sesiones periódicas', 'Mismo día y hora cada semana, con cambios sencillos.'], ['Privacidad ante todo', 'El agente no pide datos clínicos y deriva los temas sensibles a una persona.']],
    priceTitle: 'Planes sencillos', priceLead: 'Precio por clínica, con profesionales ilimitados en el plan Clínica.',
    plans: [['Esencial', '99 €', '/mes', ['1 número de WhatsApp', 'Hasta 2 profesionales', 'Recordatorios y confirmaciones', 'Panel con agenda y conversaciones']], ['Clínica', '179 €', '/mes', ['Profesionales ilimitados', 'Atención humana integrada', 'Métricas de ausencias y confirmaciones', 'Plantillas de mensaje y e-mail'], true], ['Red', 'A consultar', '', ['Varias sedes', 'Español y portugués', 'Integraciones con tu sistema', 'Gestor de cuenta']]],
    popular: 'El más elegido', choose: 'Empezar prueba gratis', talk: 'Hablar con ventas',
    faqTitle: 'Preguntas frecuentes',
    faq: [['¿Tengo que cambiar mi número de WhatsApp?', 'No. El agente funciona en el número que ya usa tu clínica, mediante WhatsApp Business.'], ['¿Y si el paciente quiere hablar con una persona?', 'Puede pedirlo en cualquier momento. El agente avisa a recepción en el panel y deja de responder en esa conversación.'], ['¿Los datos de los pacientes están seguros?', 'Sí. Cumplimos el RGPD y la LGPD, con datos cifrados y acceso por perfil.'], ['¿Funciona en portugués?', 'Sí. El agente responde en español de España y portugués de Brasil, según escriba el paciente.']],
    finalTitle: 'Menos llamadas. Más tiempo para cuidar.', finalLead: 'Mira el agente funcionando con la agenda de tu clínica en 20 minutos.',
    footer: ['Producto', 'Empresa', 'Legal'], rights: '© 2026 Forgeon. Todos los derechos reservados.',
    form: { title: 'Solicitar demo', desc: 'Respondemos en 1 día laborable.', name: 'Tu nombre', clinic: 'Nombre de la clínica', phone: 'WhatsApp', type: 'Especialidad', send: 'Enviar', ok: 'Hemos recibido tu solicitud', okd: 'Te escribiremos por WhatsApp muy pronto.' },
  },
};
