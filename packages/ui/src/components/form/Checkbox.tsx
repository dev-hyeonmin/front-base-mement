import { useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

export interface CheckboxProps {
  id: string;
  value: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  registerOption?: RegisterOptions;
  onChange?: () => void;
}

export const Checkbox = ({
  id,
  value,
  label,
  checked = false,
  disabled = false,
  registerOption,
  onChange = () => { }
}: CheckboxProps) => {
  const { register, formState: { errors } } = useFormContext();
  const [checkboxState, setCheckboxState] = useState(checked);
  const changeCheckboxState = () => {
    setCheckboxState((currentValue) => !currentValue);
    onChange();
  }

  return (
    <div className="ui-checkbox">
      <input
        {...register(value, registerOption)}
        id={id}
        type='checkbox'
        checked={checkboxState}
        onChange={() => changeCheckboxState()}
        disabled={disabled} />
      <label
        className="ui-checkbox-custom"
        htmlFor={id}
      />

      {label &&
        <label htmlFor={id} className="ui-checkbox__label">
          {label}
        </label>
      }
    </div>
  )
}