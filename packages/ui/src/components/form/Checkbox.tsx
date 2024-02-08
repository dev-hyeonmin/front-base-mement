import { RegisterOptions, useFormContext } from "react-hook-form";

export interface CheckboxProps {
  value: number | string;
  name: string;
  label?: string;
  disabled?: boolean;
  registerOption?: RegisterOptions;
}

export const Checkbox = ({
  value,
  name,
  label,
  disabled = false,
  registerOption,
}: CheckboxProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="ui-checkbox">
      <input
        {...register(name, registerOption)}
        id={`checkbox_${value}_${label}`}
        type='checkbox'
        value={value}
        disabled={disabled} />
      <label
        className="ui-checkbox-custom"
        htmlFor={`checkbox_${value}_${label}`}
      />

      {label &&
        <label htmlFor={`checkbox_${value}_${label}`} className="ui-checkbox__label">
          {label}
        </label>
      }
    </div>
  )
}