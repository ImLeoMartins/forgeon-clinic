import React from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { Field, controlStyle, type ControlSize } from './Input';
import { useForcedState } from '../utils/interactive';

export type SelectOption = string | { value: string; label: string; disabled?: boolean };

/** Native select styled to match Input — professional, service, language pickers. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  size?: ControlSize;
  iconLeft?: IconName;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}

export function Select({ label, hint, error, options = [], placeholder, size = 'md', id, required, disabled, iconLeft, value, defaultValue, onChange, style, ...rest }: SelectProps) {
  const [focusState, setFocus] = React.useState(false);
  const focus = useForcedState()?.focus ?? focusState;
  const fid = id || 'sel-' + React.useId().replace(/:/g, '');
  return (
    <Field label={label} hint={hint} error={error} id={fid} required={required}>
      <div style={{ ...controlStyle({ focus, error, disabled, size }), position: 'relative', padding: 0, ...style }}>
        {iconLeft && <span style={{ position: 'absolute', left: 14, pointerEvents: 'none', display: 'flex' }}><Icon name={iconLeft} size={18} color="var(--text-subtle)" /></span>}
        <select id={fid} disabled={disabled} required={required} value={value} defaultValue={value === undefined ? (defaultValue ?? (placeholder ? '' : undefined)) : undefined}
          onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-invalid={!!error || undefined} {...rest}
          style={{ appearance: 'none', WebkitAppearance: 'none', width: '100%', height: '100%', border: 0, outline: 'none', background: 'transparent', font: 'inherit', fontSize: size === 'sm' ? 14 : 16, color: 'inherit', paddingBlock: 0, paddingRight: 'var(--space-10)', paddingLeft: iconLeft ? 42 : 14, cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => { const opt = typeof o === 'string' ? { value: o, label: o } : o; return <option key={opt.value} value={opt.value} disabled={'disabled' in opt ? opt.disabled : undefined}>{opt.label}</option>; })}
        </select>
        <span style={{ position: 'absolute', right: 14, pointerEvents: 'none', display: 'flex' }}><Icon name="chevron-down" size={18} color="var(--text-muted)" /></span>
      </div>
    </Field>
  );
}
