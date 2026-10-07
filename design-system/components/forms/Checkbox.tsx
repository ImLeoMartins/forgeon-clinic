import React from 'react';
import { Icon } from '../icons/Icon';
import { transition, useForcedState } from '../utils/interactive';

export interface ChoiceProps {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

/** Shared checkbox/radio base with label + description and a 44px row target. */
export function Choice({ kind, label, description, checked, defaultChecked, onChange, disabled, name, value, id }: ChoiceProps & { kind: 'checkbox' | 'radio' }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focusState, setFocus] = React.useState(false);
  const focus = useForcedState()?.focus ?? focusState;
  const fid = id || kind + '-' + React.useId().replace(/:/g, '');
  const border = `1.5px solid ${on ? 'var(--action-primary)' : 'var(--border-strong)'}`;
  const box: React.CSSProperties = kind === 'radio'
    ? { width: 20, height: 20, borderRadius: 'var(--radius-pill)', border, background: 'var(--surface-card)' }
    : { width: 20, height: 20, borderRadius: 'var(--radius-xs)', border, background: on ? 'var(--action-primary)' : 'var(--surface-card)' };
  return (
    <label htmlFor={fid} style={{ display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 12, minHeight: 'var(--touch-min)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, paddingTop: description ? 10 : 0, boxSizing: 'border-box' }}>
      <span style={{ position: 'relative', flex: 'none', display: 'grid', placeItems: 'center', boxSizing: 'border-box', ...box, boxShadow: focus ? 'var(--focus-ring)' : 'none', transition }}>
        <input id={fid} type={kind} name={name} value={value} checked={on} disabled={disabled}
          onChange={(e) => { if (checked === undefined) setInner(e.target.checked); if (onChange) onChange(e.target.checked, e); }}
          onFocus={(e) => setFocus(e.target.matches(':focus-visible'))} onBlur={() => setFocus(false)}
          style={{ position: 'absolute', inset: -12, opacity: 0, margin: 0, cursor: 'inherit' }} />
        {on && kind === 'checkbox' && <Icon name="check" size={14} strokeWidth={3} color="var(--text-on-primary)" />}
        {on && kind === 'radio' && <span style={{ width: 10, height: 10, borderRadius: 'var(--radius-pill)', background: 'var(--action-primary)' }} />}
      </span>
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', color: 'var(--text-strong)', fontWeight: 500 }}>{label}</span>}
          {description && <span style={{ fontSize: 'var(--text-xs-size)', lineHeight: 'var(--text-xs-lh)', color: 'var(--text-muted)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}

/** Checkbox with label/description and a 44px row target. */
export type CheckboxProps = ChoiceProps;

export function Checkbox(props: CheckboxProps) { return <Choice kind="checkbox" {...props} />; }
