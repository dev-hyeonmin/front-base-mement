import { RegisterOptions, useFormContext } from "react-hook-form";

export interface RadioProps {
  value: number | string;
  name: string;
  label?: string;
  disabled?: boolean;
  registerOption?: RegisterOptions;
}

export const Radio = ({
  value,
  name,
  label,
  disabled = false,
  registerOption
}: RadioProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="ui-radio">
      <input
        {...register(name, registerOption)}
        id={`${name}_${value}`}
        type='radio'
        value={value}
        disabled={disabled}/>
      <label
        className="ui-radio-custom"
        htmlFor={`${name}_${value}`}
      />

      {label &&
        <label htmlFor={`${name}_${value}`} className="ui-radio-label">
          {label}
        </label>
      }
    </div>
  )
}