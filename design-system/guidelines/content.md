# Content fundamentals — voice and copy

Ported verbatim from the Claude Design export (`readme.md` → CONTENT FUNDAMENTALS). Applies to every UI string, WhatsApp template and e-mail, in pt-BR and es-ES.

**Voice:** warm, clear, professional. Calm health — never hospital-cold, never alarmist. Short sentences. One idea per sentence.

- **Address:** pt-BR uses **você** (informal-respectful); es-ES uses **tú** ("Tu agenda", "¿La confirmas?"). The clinic speaks as **"nós"/"nosotros"** ("Vamos avisar…", "Te enviaremos…"). The agent introduces itself only when useful; it never pretends to be human.
- **Patient name first** when there is one: "Oi, Marina!", "Hola, Lucía."
- **Casing:** sentence case everywhere — buttons, titles, menu items ("Nova consulta", "Ver agenda"). Uppercase only for tiny overlines/day labels (QUA, JUE) with tracking.
- **Buttons are verbs:** Confirmar · Remarcar · Cancelar consulta · Assumir conversa / Confirmar cita · Reprogramar · Atender conversación.
- **Times and dates:** 24h clock `14:30`, `15/10`, weekday short forms (Seg, Ter… / Lun, Mar…). Decimal comma: `92,4%`. Tabular numerals.
- **Urgency without alarm:** state facts + next step. ✅ "Marcos Teixeira precisa de alguém da equipe. Dor e sangramento após a extração de ontem." ❌ "EMERGÊNCIA! Paciente em risco!"
- **Psychology context:** no clinical questions from the agent; sensitive topics are routed to a person. Avoid words like "caso", "problema"; prefer "sessão", "acompanhamento".
- **Errors explain the fix:** "Informe um telefone com DDD." / "Indica un teléfono con prefijo."
- **Emoji:** the agent and UI do **not** use emoji. Patients may — render them as-is. No emoji in headings, buttons or e-mails.
- **Status vocabulary:** Confirmada · Pendente · Cancelada · Faltou · Remarcada / Confirmada · Pendiente · Cancelada · No asistió · Reprogramada.

## Examples

- Reminder (pt-BR): "Oi, Helena! Passando para lembrar da sua sessão amanhã, terça, às 16:00 com a Dra. Ana. Você confirma?"
- Reminder (es-ES): "Hola, Javier. Te recordamos tu cita de mañana, jueves, a las 10:30 con el Dr. Ruiz. ¿La confirmas?"
- Handoff (agent → patient): "Para sua segurança, vou chamar alguém da nossa equipe agora mesmo. Um momento, por favor."
- Toast: "Consulta remarcada — Marina recebeu a nova data no WhatsApp."

## Imagery

None supplied. If photography is added: warm, natural light, real clinic interiors and people, no stock "doctor with stethoscope" clichés, no cold blue tints.

## Placeholder content

Prices, clinic names, patients and numbers in `design-system/templates` are **placeholder content**, not real data.
