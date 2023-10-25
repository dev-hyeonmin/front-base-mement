import { useState } from "react";

export interface CheckboxProps {
  id: string;
  label?: string;
  active?: boolean;
}

export const Checkbox = ({
  id,
  label,
  active = false,
  ...props
}: CheckboxProps) => {
  const [mode, setMode] = useState(active ? "ui-checkbox--active" : '');
  const [state, setState] = useState(active);

  const onClick = () => {
    setState(!state);
    setMode(state ? "ui-checkbox--active" : '');
  }

  return (
    <div className="ui-checkbox">
      <input
        id={id}
        type='checkbox'
        checked={state ? true : false}
        className={[mode].join(' ')}
        onChange={() => { }} />
      <label
        className="ui-checkbox-custom"
        htmlFor={id}
        onClick={() => onClick()}
      />

      {label &&
        <label htmlFor={id}  className="ui-checkbox-label">
          {label}
        </label>
      }
    </div>
  )
}