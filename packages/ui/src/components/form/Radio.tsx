import { useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

export interface RadioProps {
  id: string;
  value: string;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  registerOption?: RegisterOptions;
}

export const Radio = ({
  id,
  value,
  label,
  selected = false,
  disabled = false,
  registerOption,
  ...props
}: RadioProps) => {
  const { register, formState: { errors } } = useFormContext();
  const [mode, setMode] = useState(selected ? "ui-radio--active" : '');
  const [state, setState] = useState(selected);

  const onClick = () => {
    setState(!state);
    setMode(state ? "ui-radio--active" : '');
  }

  return (
    <div className="ui-radio">
      <input
        {...register(value, registerOption)}
        id={id}
        type='radio'
        checked={state ? true : false}
        className={[mode].join(' ')}
        onChange={() => onClick()}
        disabled={disabled}/>
      <label
        className="ui-radio-custom"
        htmlFor={id}
      />

      {label &&
        <label htmlFor={id}  className="ui-radio-label">
          {label}
        </label>
      }
    </div>
  )
}