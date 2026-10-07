import React from 'react';

export interface InteractiveState {
  hover: boolean;
  press: boolean;
  focus: boolean;
}

const ForcedStateContext = React.createContext<Partial<InteractiveState> | null>(null);

/**
 * Forces hover/press/focus on every interactive DS component inside it.
 * Used by the /design-system showcase to render static state specimens; never use it in product UI.
 */
export function ForceState({ state, children }: { state: Partial<InteractiveState>; children: React.ReactNode }) {
  return <ForcedStateContext.Provider value={state}>{children}</ForcedStateContext.Provider>;
}

/** Forced state from the nearest <ForceState>, or null. */
export function useForcedState(): Partial<InteractiveState> | null {
  return React.useContext(ForcedStateContext);
}

export interface InteractiveHandlers {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void;
  onBlur?: () => void;
}

/** Hover/press/focus state for inline-styled components. Returns [handlers, {hover, press, focus}]. */
export function useInteractive(disabled?: boolean): [InteractiveHandlers, InteractiveState] {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const forced = useForcedState();
  const handlers: InteractiveHandlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: (e) => { try { setFocus(e.target.matches(':focus-visible')); } catch { setFocus(true); } },
    onBlur: () => setFocus(false),
  };
  const state = disabled
    ? { hover: false, press: false, focus: false }
    : { hover: forced?.hover ?? hover, press: forced?.press ?? press, focus: forced?.focus ?? focus };
  return [handlers, state];
}

export const transition = 'background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)';

export type Locale = 'pt-BR' | 'es-ES';
export type AppointmentStatus = 'confirmed' | 'pending' | 'cancelled' | 'noshow' | 'rescheduled';
