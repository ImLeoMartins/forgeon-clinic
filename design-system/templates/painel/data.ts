// Sample data for the Forgeon Clinic panel template (fictional patients — placeholder content).
import type { AppointmentStatus, PatientRow, WeekCalendarAppointment, WeekCalendarDay, Locale } from '../../index';
import type { ChatBubbleProps } from '../../index';

export interface Professional { id: 'ana' | 'paulo' | 'julia'; name: string; specialty: string }
export type ProfessionalId = Professional['id'];
export interface Message extends Pick<ChatBubbleProps, 'from' | 'text' | 'time' | 'status' | 'author'> { slots?: string[] }
export interface Conversation { id: string; name: string; phone: string; preview: string; time: string; unread: number; urgent?: boolean; handledBy?: 'agent' | 'human'; professional: string; next: string; reason?: string; messages: Message[] }
export interface MessageTemplate { id: string; name: string; channel: 'whatsapp' | 'email'; active: boolean; sent: number; lang: Locale; body: string }

export const FC_DATA = {
  clinic: { name: 'Clínica Sorriso & Mente', city: 'São Paulo' },
  user: { name: 'Carla Mendes', role: 'Recepção' },
  professionals: [
    { id: 'ana', name: 'Dra. Ana Lima', specialty: 'Psicologia' },
    { id: 'paulo', name: 'Dr. Paulo Reis', specialty: 'Odontologia · Clínico geral' },
    { id: 'julia', name: 'Dra. Júlia Prado', specialty: 'Ortodontia' },
  ] as Professional[],
  days: [
    { key: 'seg', label: 'Seg', date: 13 },
    { key: 'ter', label: 'Ter', date: 14, isToday: true, blocked: [{ start: '12:00', end: '13:00', label: 'Almoço' }] },
    { key: 'qua', label: 'Qua', date: 15, blocked: [{ start: '12:00', end: '13:00', label: 'Almoço' }] },
    { key: 'qui', label: 'Qui', date: 16 },
    { key: 'sex', label: 'Sex', date: 17 },
  ] as WeekCalendarDay[],
  appointments: {
    ana: [
      { id: 'a1', day: 'seg', start: '08:00', end: '08:50', patient: 'Lúcia Prado', service: 'Terapia individual', status: 'confirmed' },
      { id: 'a2', day: 'seg', start: '10:00', end: '10:50', patient: 'Rafael Dias', service: 'Terapia individual', status: 'noshow' },
      { id: 'a3', day: 'ter', start: '09:00', end: '09:50', patient: 'Marina Souza', service: 'Terapia individual', status: 'confirmed', byAgent: true },
      { id: 'a4', day: 'ter', start: '14:00', end: '14:50', patient: 'Bruno Lima', service: 'Primeira sessão', status: 'pending' },
      { id: 'a5', day: 'ter', start: '16:00', end: '16:50', patient: 'Helena Rocha', service: 'Terapia individual', status: 'confirmed', byAgent: true },
      { id: 'a6', day: 'qua', start: '08:30', end: '09:20', patient: 'Ana Costa', service: 'Terapia individual', status: 'cancelled' },
      { id: 'a7', day: 'qua', start: '11:00', end: '11:50', patient: 'Paula Reis', service: 'Terapia individual', status: 'rescheduled', byAgent: true },
      { id: 'a8', day: 'qui', start: '09:00', end: '10:20', patient: 'Joana e Caio Melo', service: 'Terapia de casal', status: 'confirmed' },
      { id: 'a9', day: 'qui', start: '15:00', end: '15:50', patient: 'Sofia Martins', service: 'Terapia individual', status: 'pending', byAgent: true },
      { id: 'a10', day: 'sex', start: '13:00', end: '13:50', patient: 'Tiago Nunes', service: 'Terapia individual', status: 'confirmed', byAgent: true },
    ],
    paulo: [
      { id: 'p1', day: 'seg', start: '08:00', end: '08:40', patient: 'Pedro Alves', service: 'Limpeza', status: 'confirmed' },
      { id: 'p2', day: 'seg', start: '09:00', end: '10:00', patient: 'Renata Gomes', service: 'Canal', status: 'confirmed' },
      { id: 'p3', day: 'ter', start: '08:30', end: '09:10', patient: 'Diego Souza', service: 'Avaliação', status: 'confirmed', byAgent: true },
      { id: 'p4', day: 'ter', start: '10:00', end: '10:40', patient: 'Carolina Luz', service: 'Restauração', status: 'pending' },
      { id: 'p5', day: 'ter', start: '15:00', end: '16:00', patient: 'Marcos Teixeira', service: 'Extração', status: 'confirmed' },
      { id: 'p6', day: 'qua', start: '09:00', end: '09:40', patient: 'Isabela Freitas', service: 'Limpeza', status: 'confirmed', byAgent: true },
      { id: 'p7', day: 'qui', start: '14:00', end: '14:40', patient: 'André Pires', service: 'Avaliação', status: 'cancelled' },
      { id: 'p8', day: 'sex', start: '10:00', end: '10:40', patient: 'Beatriz Lopes', service: 'Clareamento', status: 'pending', byAgent: true },
    ],
    julia: [
      { id: 'j1', day: 'ter', start: '13:00', end: '13:30', patient: 'Laura Campos', service: 'Manutenção aparelho', status: 'confirmed', byAgent: true },
      { id: 'j2', day: 'qua', start: '14:00', end: '14:30', patient: 'Gabriel Ramos', service: 'Manutenção aparelho', status: 'confirmed' },
      { id: 'j3', day: 'sex', start: '09:00', end: '10:00', patient: 'Clara Nogueira', service: 'Instalação de alinhadores', status: 'pending' },
    ],
  } as Record<ProfessionalId, WeekCalendarAppointment[]>,
  conversations: [
    { id: 'c1', name: 'Marcos Teixeira', phone: '+55 11 97654-3210', preview: 'Tá doendo bastante e sangrando um pouco', time: '09:18', unread: 2, urgent: true, professional: 'Dr. Paulo Reis', next: 'Hoje · 15:00 · Extração',
      reason: 'Dor e sangramento após procedimento. O agente sugeriu falar com a equipe.',
      messages: [
        { from: 'patient', text: 'Bom dia. Fiz uma extração ontem e tá doendo bastante e sangrando um pouco. É normal?', time: '09:14' },
        { from: 'agent', text: 'Bom dia, Marcos. Sinto muito pelo desconforto. Para sua segurança, vou chamar alguém da nossa equipe agora mesmo. Um momento, por favor.', time: '09:14', status: 'read' },
        { from: 'system', text: 'Agente pediu atendimento humano · 09:14' },
        { from: 'patient', text: 'Tá bom, obrigado', time: '09:18' },
      ] },
    { id: 'c2', name: 'Marina Souza', phone: '+55 11 98765-4321', preview: 'Perfeito, obrigada!', time: '09:12', unread: 0, handledBy: 'agent', professional: 'Dra. Ana Lima', next: 'Sex 17 · 10:30 · Terapia individual',
      messages: [
        { from: 'patient', text: 'Oi! Consigo remarcar minha sessão de quinta pra sexta?', time: '09:10' },
        { from: 'agent', text: 'Claro, Marina! Na sexta a Dra. Ana tem estes horários:', time: '09:10', status: 'read', slots: ['09:00', '10:30', '14:00'] },
        { from: 'patient', text: '10:30', time: '09:11' },
        { from: 'agent', text: 'Pronto! Sua sessão ficou para sexta, 17/10, às 10:30. Te mando um lembrete um dia antes.', time: '09:11', status: 'read' },
        { from: 'patient', text: 'Perfeito, obrigada!', time: '09:12' },
      ] },
    { id: 'c3', name: 'Javier Ortega', phone: '+34 612 345 678', preview: '¿Aceptáis Sanitas?', time: '08:57', unread: 1, handledBy: 'agent', professional: 'Dr. Paulo Reis', next: 'Mié 15 · 16:00 · Limpieza',
      messages: [
        { from: 'patient', text: 'Hola, ¿aceptáis Sanitas?', time: '08:57' },
        { from: 'agent', text: 'Hola, Javier. Sí, trabajamos con Sanitas para limpiezas y revisiones. ¿Quieres que te reserve una cita?', time: '08:57', status: 'delivered' },
      ] },
    { id: 'c4', name: 'Pedro Alves', phone: '+55 21 99876-1234', preview: 'Obrigado, até quinta!', time: '08:40', unread: 0, handledBy: 'human', professional: 'Dr. Paulo Reis', next: 'Qui 16 · 08:00 · Limpeza',
      messages: [
        { from: 'patient', text: 'Preciso de nota fiscal da última consulta', time: '08:31' },
        { from: 'system', text: 'Conversa transferida para a recepção · 08:32' },
        { from: 'human', author: 'Carla', text: 'Oi, Pedro! Aqui é a Carla. Já te enviei a nota por e-mail.', time: '08:38', status: 'read' },
        { from: 'patient', text: 'Obrigado, até quinta!', time: '08:40' },
      ] },
    { id: 'c5', name: 'Helena Rocha', phone: '+55 11 91111-2233', preview: 'Confirmado ✅', time: 'Ontem', unread: 0, handledBy: 'agent', professional: 'Dra. Ana Lima', next: 'Hoje · 16:00 · Terapia individual',
      messages: [
        { from: 'agent', text: 'Oi, Helena! Passando para lembrar da sua sessão amanhã, terça, às 16:00 com a Dra. Ana. Você confirma?', time: '18:00', status: 'read' },
        { from: 'patient', text: 'Confirmado ✅', time: '18:22' },
      ] },
  ] as Conversation[],
  patients: [
    { id: '1', name: 'Marina Souza', phone: '+55 11 98765-4321', professional: 'Dra. Ana Lima', lastVisit: '09/10/2026', next: '17/10 · 10:30', status: 'rescheduled' },
    { id: '2', name: 'Marcos Teixeira', phone: '+55 11 97654-3210', professional: 'Dr. Paulo Reis', lastVisit: '13/10/2026', next: '14/10 · 15:00', status: 'confirmed' },
    { id: '3', name: 'Javier Ortega', phone: '+34 612 345 678', professional: 'Dr. Paulo Reis', lastVisit: '28/09/2026', next: '15/10 · 16:00', status: 'pending' },
    { id: '4', name: 'Pedro Alves', phone: '+55 21 99876-1234', professional: 'Dr. Paulo Reis', lastVisit: '30/09/2026', next: '16/10 · 08:00', status: 'confirmed' },
    { id: '5', name: 'Rafael Dias', phone: '+55 11 93456-7890', professional: 'Dra. Ana Lima', lastVisit: '13/10/2026', status: 'noshow', channel: 'phone' },
    { id: '6', name: 'Helena Rocha', phone: '+55 11 91111-2233', professional: 'Dra. Ana Lima', lastVisit: '07/10/2026', next: '14/10 · 16:00', status: 'confirmed' },
    { id: '7', name: 'Ana Costa', phone: '+55 11 95555-0101', professional: 'Dra. Ana Lima', lastVisit: '01/10/2026', status: 'cancelled' },
    { id: '8', name: 'Laura Campos', phone: '+55 11 94444-8080', professional: 'Dra. Júlia Prado', lastVisit: '16/09/2026', next: '14/10 · 13:00', status: 'confirmed' },
  ] as PatientRow[],
  templates: [
    { id: 't1', name: 'Lembrete 24h antes', channel: 'whatsapp', active: true, sent: 412, lang: 'pt-BR', body: 'Oi, {{paciente.nome}}! Passando para lembrar da sua consulta amanhã, {{data}}, às {{hora}} com {{profissional}}. Você confirma?' },
    { id: 't2', name: 'Confirmação de agendamento', channel: 'whatsapp', active: true, sent: 268, lang: 'pt-BR', body: 'Pronto, {{paciente.nome}}! Sua consulta ficou para {{data}}, às {{hora}}, com {{profissional}}. Endereço: {{clinica.endereco}}.' },
    { id: 't3', name: 'Recordatorio 24 h', channel: 'whatsapp', active: true, sent: 97, lang: 'es-ES', body: 'Hola, {{paciente.nombre}}. Te recordamos tu cita de mañana, {{fecha}}, a las {{hora}} con {{profesional}}. ¿La confirmas?' },
    { id: 't4', name: 'Retorno após falta', channel: 'whatsapp', active: false, sent: 31, lang: 'pt-BR', body: 'Oi, {{paciente.nome}}. Sentimos sua falta hoje. Quer escolher um novo horário? É só responder por aqui.' },
    { id: 't5', name: 'E-mail de confirmação', channel: 'email', active: true, sent: 188, lang: 'pt-BR', body: 'Assunto: Sua consulta está confirmada · {{data}} às {{hora}}' },
  ] as MessageTemplate[],
};

export type { AppointmentStatus };
