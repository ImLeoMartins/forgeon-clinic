# Component usage

One entry per component, ported from the per-component `*.prompt.md` notes of the Claude Design export. Every component is imported from the public API:

```tsx
import { Button, Input, StatusBadge } from '@ds';
```

Props are typed in each `design-system/components/**/<Name>.tsx`; allowed props and enum values are also enforced by `npm run lint` (`ds/no-restricted-syntax`). All states are rendered at `/design-system`.

## Brand and icons

### Logo
Forgeon Clinic brand mark — use in app headers, landing nav/footer, emails; never redraw the symbol.
```tsx
<Logo variant="lockup" size={32} />
<Logo variant="symbol" tone="white" size={24} />
```
Variants: lockup (default), endorsed (adds "by FORGEON" — landing/footer), symbol (favicons, avatars of the agent), forgeon (parent brand). Tones: color, ink, white. Min symbol height 16px; clear space = 0.5× symbol height.

### Icon
Rounded-stroke line icon (Lucide set, copied in) — use for every UI glyph.
```tsx
<Icon name="calendar-check" size={20} />
<Icon name="whatsapp" color="var(--whatsapp-text)" />
```
~95 curated Lucide icons + WhatsApp brand glyph (`iconNames` lists them; `name` is type-checked). 16px in dense UI, 20px default, 24px in patient-facing/marketing. Keep strokeWidth 1.75 (2 for ≤14px). AI marker: `sparkles` in indigo. Human/reception: `headset`. Handoff request: `hand`.

## Actions

### Button
Primary action control — one primary per view; secondary/ghost for the rest.
```tsx
<Button iconLeft="calendar-plus">Nova consulta</Button>
<Button variant="secondary">Remarcar</Button>
<Button variant="whatsapp" size="lg">Falar no WhatsApp</Button>
```
primary = teal-600 (AA on white). soft = teal-50 tint for in-card actions. danger only for destructive/urgent handoff. whatsapp variant only on WhatsApp CTAs (auto icon). Labels are verbs: "Confirmar", "Remarcar", "Assumir conversa". States: hover, active (press), focus ring, `disabled`, `loading`.

### IconButton
Square icon-only button for toolbars, row actions and headers.
```tsx
<IconButton icon="bell" label="Notificações" badge={3} />
```
Always pass label. Ghost in toolbars, secondary next to inputs, soft inside cards.

## Forms

### Input
Labelled single-line text field — patient names, phones, search.
```tsx
<Input label="Telefone (WhatsApp)" iconLeft="phone" placeholder="(11) 90000-0000" hint="Usamos para lembretes." />
```
Labels always visible (no placeholder-as-label). 16px text to avoid iOS zoom. Errors explain the fix: "Informe um telefone com DDD." `Field` (label/hint/error wrapper) and `controlStyle` are exported for custom controls.

### Select
Native select styled to match Input — professional, service, language pickers.
```tsx
<Select label="Profissional" options={['Dra. Ana Lima', 'Dr. Paulo Reis']} />
```
Uses native `<select>` for accessibility and mobile pickers.

### Textarea
Multi-line text field — notes, message templates, agent instructions.
```tsx
<Textarea label="Observações" rows={3} />
```
Same chrome as Input.

### Checkbox
Checkbox with label/description and a 44px row target.
```tsx
<Checkbox label="Enviar lembrete 24h antes" defaultChecked />
```
Controlled (checked) or uncontrolled (defaultChecked). Shares the `Choice` base with Radio.

### Radio
Single-choice option; group several with the same name.
```tsx
<Radio name="canal" value="wa" label="WhatsApp" defaultChecked />
```
Stack vertically with 4px gap; rows are 44px tall.

### Switch
On/off toggle for settings that apply immediately (agent on/off, reminders).
```tsx
<Switch label="Agente IA ativo" description="Responde pacientes 24h" defaultChecked />
```
Use Checkbox inside forms that need a Save button; Switch for instant settings.

## Display

### Card
Primary surface for grouping content in the panel and landing.
```tsx
<Card title="Próximas consultas" subtitle="Hoje, 14 de outubro" actions={<Button size="sm" variant="ghost">Ver agenda</Button>}>…</Card>
```
16px radius, 1px sand border, shadow-xs. elevated for popovers/landing feature cards; flat for nested groups; selected = mint + teal-300 border.

### Badge
Small pill label for counts, categories, AI markers.
```tsx
<Badge tone="ai" icon="sparkles">IA</Badge>
```
For appointment status use StatusBadge. brand tone (gradient) only for "Novo"/plan highlights.

### Tag
Filter chip / removable tag (36px).
```tsx
<Tag selected onClick={…} count={12}>Pendentes</Tag>
```
Use for agenda/conversation filters and patient tags.

### Avatar
Initials (or photo) circle for patients and professionals.
```tsx
<Avatar name="Marina Souza" size={40} />
```
Strips "Dr./Dra." when computing initials. Soft tinted tones only.

## Navigation

### Tabs
Section switcher — underline for page sections, segmented for view toggles (Dia/Semana).
```tsx
<Tabs variant="segmented" items={[{ id: 'dia', label: 'Dia' }, { id: 'semana', label: 'Semana' }]} value="semana" onChange={setView} />
```
count shows a pill; urgent turns it red (e.g. handoffs waiting).

## Overlays

### Dialog
Modal for focused decisions — cancel appointment, confirm handoff.
```tsx
<Dialog title="Cancelar consulta?" description="Vamos avisar a paciente pelo WhatsApp." actions={<><Button variant="ghost">Voltar</Button><Button variant="danger">Cancelar consulta</Button></>} />
```
24px radius, shadow-lg, scrim 40%. Primary action on the right.

### Toast
Transient confirmation — bottom-right in the panel, auto-dismiss ~5s.
```tsx
<Toast tone="success" title="Consulta remarcada" description="Marina recebeu a nova data no WhatsApp." />
```
Consumer positions it. Past tense, calm, specific.

### Tooltip
Short hover/focus hint for icon buttons and truncated data.
```tsx
<Tooltip content="Agendada pela IA"><Icon name="sparkles" /></Tooltip>
```
Never put essential info only in a tooltip.

## Chat

### ChatBubble
Message bubble for the conversations view — distinguishes patient, AI agent and human receptionist.
```tsx
<ChatBubble from="patient" text="Oi! Consigo remarcar pra sexta?" time="09:12" />
<ChatBubble from="agent" text="Claro, Marina! Tenho estes horários:" time="09:12" status="read" />
<ChatBubble from="human" author="Carla" text="Oi Marina, aqui é a Carla da recepção." time="09:20" />
<ChatBubble from="system" text="Conversa transferida para a recepção" />
```
Patient left/white; agent right/teal-50 with sparkles label; human right/blue-grey with headset label. Do not use WhatsApp green for bubbles.

### ConversationItem
Inbox row for the conversations list.
```tsx
<ConversationItem name="Marina Souza" preview="Consigo remarcar pra sexta?" time="09:12" unread={2} />
```
Shows who is handling (IA / Recepção / Aguarda humano).

## Clinic

### StatusBadge
Appointment status pill with dot, localized.
```tsx
<StatusBadge status="confirmed" />
<StatusBadge status="noshow" locale="es-ES" />
```
pt-BR: Confirmada · Pendente · Cancelada · Faltou · Remarcada. es-ES: Confirmada · Pendiente · Cancelada · No asistió · Reprogramada.

### AppointmentCard
Appointment summary row/card — today list, patient history, confirmations.
```tsx
<AppointmentCard time="14:30" endTime="15:20" patient="Marina Souza" service="Sessão de terapia" professional="Dra. Ana Lima" status="confirmed" bookedByAgent />
```
Time block on the left (tabular, Manrope 800). compact for sidebars. cancelled strikes the time.

### TimeSlots
Grid of bookable time slots (48px targets).
```tsx
<TimeSlots groups={[{ label: 'Manhã', slots: ['08:00', '09:00', { time: '10:00', available: false }] }]} value="09:00" onChange={setTime} />
```
suggested shows a small AI sparkle. Unavailable slots are struck through and disabled.

### WeekCalendar
Week grid of appointments for one professional (agenda view).
```tsx
<WeekCalendar days={days} appointments={appts} now="10:40" startHour={8} endHour={18} />
```
Events tinted by status; byAgent shows a sparkle. blocked draws hatched lunch/unavailable ranges.

### HandoffAlert
Alert when the agent passes a conversation to the reception team.
```tsx
<HandoffAlert urgency="urgent" title="Marina pediu para falar com alguém" reason="Dor forte após extração." waiting="há 4 min" onAccept={…} />
```
Urgent = red surface + "Urgente" badge; copy stays calm and factual, never alarmist.

### PatientTable
Patients list table for the panel.
```tsx
<PatientTable rows={patients} onRowClick={open} />
```
64px rows, sand header, tabular dates. Empty `rows` renders a localized empty row ("Nenhum paciente encontrado." / "Ningún paciente encontrado."); override with `emptyLabel` (added during the port).

### KpiCard
Panel metric tile.
```tsx
<KpiCard icon="calendar-check" label="Taxa de confirmação" value="92,4" unit="%" delta={{ value: '+3,1 p.p.', trend: 'up' }} hint="vs. semana passada" />
```
Use pt-BR/es-ES number formatting (decimal comma). delta.good overrides color (e.g. faltas ↓ is good).
