// Forgeon Clinic Design System — public API. App code imports from '@ds' (this file), never from component internals.
// Styles: import '@ds/styles.css' once at the app entry (src/styles/app.css already does).

export { Logo, type LogoProps, type LogoTone } from './components/brand/Logo';
export { Icon, iconNames, type IconProps, type IconName } from './components/icons/Icon';

export { Button, type ButtonProps, type ButtonVariant } from './components/actions/Button';
export { IconButton, type IconButtonProps, type IconButtonVariant } from './components/actions/IconButton';

export { Field, Input, controlStyle, type FieldProps, type InputProps, type ControlSize } from './components/forms/Input';
export { Select, type SelectProps, type SelectOption } from './components/forms/Select';
export { Textarea, type TextareaProps } from './components/forms/Textarea';
export { Choice, Checkbox, type ChoiceProps, type CheckboxProps } from './components/forms/Checkbox';
export { Radio, type RadioProps } from './components/forms/Radio';
export { Switch, type SwitchProps } from './components/forms/Switch';

export { Card, type CardProps, type CardVariant } from './components/display/Card';
export { Badge, badgeTones, type BadgeProps, type BadgeTone } from './components/display/Badge';
export { Tag, type TagProps } from './components/display/Tag';
export { Avatar, initials, type AvatarProps } from './components/display/Avatar';

export { Tabs, type TabsProps, type TabItem } from './components/navigation/Tabs';

export { Dialog, type DialogProps } from './components/overlays/Dialog';
export { Toast, type ToastProps, type ToastTone } from './components/overlays/Toast';
export { Tooltip, type TooltipProps } from './components/overlays/Tooltip';

export { ChatBubble, type ChatBubbleProps } from './components/chat/ChatBubble';
export { ConversationItem, type ConversationItemProps } from './components/chat/ConversationItem';

export { StatusBadge, statusLabels, type StatusBadgeProps } from './components/clinic/status/StatusBadge';
export { AppointmentCard, type AppointmentCardProps } from './components/clinic/appointment/AppointmentCard';
export { TimeSlots, type TimeSlotsProps, type TimeSlot } from './components/clinic/appointment/TimeSlots';
export { WeekCalendar, type WeekCalendarProps, type WeekCalendarDay, type WeekCalendarAppointment } from './components/clinic/calendar/WeekCalendar';
export { HandoffAlert, type HandoffAlertProps } from './components/clinic/handoff/HandoffAlert';
export { PatientTable, type PatientTableProps, type PatientRow } from './components/clinic/patients/PatientTable';
export { KpiCard, type KpiCardProps } from './components/clinic/metrics/KpiCard';

export { useInteractive, ForceState, transition, type InteractiveState, type Locale, type AppointmentStatus } from './components/utils/interactive';
