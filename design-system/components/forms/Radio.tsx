import { Choice, type ChoiceProps } from './Checkbox';

/** Single-choice option; group several with the same name. */
export type RadioProps = ChoiceProps;

export function Radio(props: RadioProps) { return <Choice kind="radio" {...props} />; }
