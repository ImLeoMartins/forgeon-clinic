import React from 'react';
import { Field, controlStyle } from './Input';
import { useForcedState } from '../utils/interactive';

/** Multi-line text field — notes, message templates, agent instructions. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
}

export function Textarea({ label, hint, error, id, required, disabled, rows = 4, style, ...rest }: TextareaProps) {
  const [focusState, setFocus] = React.useState(false);
  const focus = useForcedState()?.focus ?? focusState;
  const fid = id || 'ta-' + React.useId().replace(/:/g, '');
  return (
    <Field label={label} hint={hint} error={error} id={fid} required={required}>
      <textarea id={fid} rows={rows} disabled={disabled} required={required} aria-invalid={!!error || undefined} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
        style={{ ...controlStyle({ focus, error, disabled }), height: 'auto', paddingBlock: 'var(--space-3)', paddingInline: 14, font: 'inherit', fontSize: 16, lineHeight: 'var(--text-md-lh)', resize: 'vertical', outline: 'none', ...style }} />
    </Field>
  );
}
