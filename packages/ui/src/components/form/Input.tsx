import { RegisterOptions, useFormContext } from "react-hook-form";
import { Text } from "..";
import { CommonProps } from "../common";

interface FormProps {
  [key: string]: string;
}

export interface InputProps extends CommonProps {
  value: string;
  label?: string;
  placeholder?: string;
  essential?: boolean;
  readonly?: boolean;
  type?: 'text' | 'password' | 'email';
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
  const { register, formState: { errors } } = useFormContext();

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
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={[`ui-input--${size}`, mode, hasIcon].join(' ')}
        onFocus={props.onFocus} />
      {/* onChange={props.onChange} */}
      {/* onBlur={props.onBlur}  */}

      {errors[value]?.message &&
        <Text skin='error' size="tiny" className={['mt-3']}>
          {errors[value]?.message?.toString()}
        </Text>
      }
    </div>
  )
}