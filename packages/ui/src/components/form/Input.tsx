import { RegisterOptions, useFormContext } from "react-hook-form";
import { CommonProps } from "../common";

export interface InputProps extends CommonProps {
  essential?: boolean;
  label?: string;
  value: string;
  readonly?: boolean;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  icon?: "calendar";
  registerOption?: RegisterOptions;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input = ({
  className = [],
  label,
  placeholder,
  essential = false,
  readonly = false,
  icon,
  type = 'text',
  size = 'medium',
  value,
  registerOption = {},
  ...props
}: InputProps) => {
  const { getValues, register, formState: { errors } } = useFormContext();

  const mode = readonly ? 'ui-input--readonly' : '';
  const hasIcon = icon ? `ui-input--icon ui-input--icon__${icon}` : '';
  
  return (
    <div className={["ui-input", ...className].join(' ')}>
      <label>
        {label}
        {essential &&
          <em>*</em>
        }
      </label>
      <input
        {...register(value, registerOption)}
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={[`ui-input--${size}`, mode, hasIcon].join(' ')}
        onChange={props.onChange}
        onFocus={props.onFocus} />
        {/* onBlur={props.onBlur}  */}

      {errors.root?.message}
    </div>
  )
}