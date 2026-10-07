import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { transition, useForcedState } from '../utils/interactive';

/** Label / hint / error wrapper shared by every form control. */
export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export function Field({ label, hint, error, id, required, children }: FieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
      {label && <label htmlFor={id} style={{ fontSize: 'var(--text-sm-size)', lineHeight: 'var(--text-sm-lh)', fontWeight: 600, color: 'var(--text-strong)' }}>{label}{required && <span style={{ color: 'var(--danger-text)' }}> *</span>}</label>}
      {children}
      {(error || hint) && (
        <div id={id ? id + '-msg' : undefined} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs-size)', lineHeight: 'var(--text-xs-lh)', color: error ? 'var(--danger-text)' : 'var(--text-muted)' }}>
          {error && <Icon name="circle-alert" size={14} />}{error || hint}
        </div>
      )}
    </div>
  );
}

export type ControlSize = 'sm' | 'md' | 'lg';

/** Shared box style for Input/Select/Textarea: default · focus (teal border + halo) · error · disabled. */
export function controlStyle({ focus, error, disabled, size = 'md' }: { focus: boolean; error?: string; disabled?: boolean; size?: ControlSize }): React.CSSProperties {
  return {
    height: size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)',
    display: 'flex', alignItems: 'center', gap: 8, paddingBlock: 0, paddingInline: 14, boxSizing: 'border-box', width: '100%',
    background: disabled ? 'var(--bg-sunken)' : 'var(--surface-card)', borderRadius: 'var(--radius-md)',
    border: `var(--border-w) solid ${error ? 'var(--danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    boxShadow: focus ? (error ? 'var(--shadow-focus-danger)' : 'var(--shadow-focus-input)') : 'none',
    color: 'var(--text-strong)', transition, opacity: disabled ? 0.7 : 1,
  };
}

/** Labelled single-line text field — patient names, phones, search. Errors explain the fix. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: IconName;
  suffix?: React.ReactNode;
  size?: ControlSize;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export function Input({ label, hint, error, iconLeft, suffix, size = 'md', id, required, disabled, style, inputStyle, onFocus, onBlur, ...rest }: InputProps) {
  const [focusState, setFocus] = React.useState(false);
  const focus = useForcedState()?.focus ?? focusState;
  const fid = id || 'in-' + React.useId().replace(/:/g, '');
  return (
    <Field label={label} hint={hint} error={error} id={fid} required={required}>
      <div style={{ ...controlStyle({ focus, error, disabled, size }), ...style }}>
        {iconLeft && <Icon name={iconLeft} size={18} color="var(--text-subtle)" />}
        <input id={fid} disabled={disabled} required={required} aria-invalid={!!error || undefined} aria-describedby={error || hint ? fid + '-msg' : undefined}
          onFocus={(e) => { setFocus(true); if (onFocus) onFocus(e); }} onBlur={(e) => { setFocus(false); if (onBlur) onBlur(e); }} {...rest}
          style={{ flex: 1, minWidth: 0, height: '100%', border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: size === 'sm' ? 14 : 16, color: 'inherit', padding: 0, ...inputStyle }} />
        {suffix && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm-size)', whiteSpace: 'nowrap' }}>{suffix}</span>}
      </div>
    </Field>
  );
}
