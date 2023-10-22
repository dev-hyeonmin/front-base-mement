import { useState } from "react";

export interface CheckboxProps {
  /**
   * checkbox id
   */
  id: string;
  /**
  * Is the checkbox activated?
  */
  active?: boolean;
}

export const Checkbox = ({
  id,
  active = false,
  ...props
}: CheckboxProps) => {
  const [mode, setMode] = useState(active ? "storybook-checkbox--active" : '');
  const [state, setState] = useState(active);

  const onClick = () => {
    setState(!state);
    setMode(state ? "storybook-checkbox--active" : '');
  }

  return (
    <>
      <input
        id={id}
        type='checkbox'
        checked={state ? true : false}
        className={['storybook-checkbox', mode].join(' ')}
        onChange={() => {}} />
      <label
        htmlFor={id}
        onClick={() => onClick()}
      />
    </>
  )
}