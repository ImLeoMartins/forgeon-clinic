import React from 'react';
import { transition, useForcedState } from '../utils/interactive';

/** On/off toggle for settings that apply immediately (agent on/off, reminders). */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
}

export function Switch({ checked, defaultChecked, onChange, label, description, disabled, id }: SwitchProps) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focusState, setFocus] = React.useState(false);
  const focus = useForcedState()?.focus ?? focusState;
  const fid = id || 'sw-' + React.useId().replace(/:/g, '');
  const toggle = () => { if (disabled) return; if (checked === undefined) setInner(!on); if (onChange) onChange(!on); };
  return (
    <div style={{ display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 12, minHeight: 'var(--touch-min)', opacity: disabled ? 0.5 : 1 }}>
      <button id={fid} type="button" role="switch" aria-checked={on} disabled={disabled} onClick={toggle}
        onFocus={(e) => setFocus(e.target.matches(':focus-visible'))} onBlur={() => setFocus(false)}
        style={{ flex: 'none', position: 'relative', width: 44, height: 26, borderRadius: 'var(--radius-pill)', border: 0, padding: 0, cursor: disabled ? 'not-allowed' : 'pointer', marginTop: description ? 2 : 0,
          background: on ? 'var(--action-primary)' : 'var(--border-strong)', boxShadow: focus ? 'var(--focus-ring)' : 'none', transition, outline: 'none' }}>
        <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: 'var(--radius-pill)', background: 'var(--sand-0)', boxShadow: 'var(--shadow-switch-thumb)', transition: 'left var(--duration-base) var(--ease-standard)' }} />
      </button>
      {(label || description) && (
        <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 2, cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {label && <span style={{ fontSize: 'var(--text-ui-size)', lineHeight: 'var(--text-ui-lh)', fontWeight: 500, color: 'var(--text-strong)' }}>{label}</span>}
          {description && <span style={{ fontSize: 'var(--text-xs-size)', lineHeight: 'var(--text-xs-lh)', color: 'var(--text-muted)' }}>{description}</span>}
        </label>
      )}
    </div>
  );
}
