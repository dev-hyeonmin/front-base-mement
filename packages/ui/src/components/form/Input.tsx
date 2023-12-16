import { RegisterOptions, useFormContext } from "react-hook-form";
import { CommonProps } from "../common";
import { Text } from "../typography/Text";

export interface InputProps extends CommonProps {
  value: string;
  placeholder?: string;
  readonly?: boolean;
  type?: 'text' | 'password' | 'email';
  size?: 'small' | 'medium' | 'large';
  icon?: "calendar";
  registerOption?: RegisterOptions;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  className = [],
  placeholder,
  readonly = false,
  icon,
  type = 'text',
  size = 'medium',
  value,
  registerOption = {}
}: InputProps) => {
  const { register } = useFormContext();
  const mode = readonly ? 'ui-input--readonly' : '';
  const hasIcon = icon ? `ui-input--icon ui-input--icon__${icon}` : '';

  return (
    <div className={["ui-input", ...className].join(' ')}>
      <input
        {...register(value, registerOption)}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        className={[`ui-input--${size}`, mode, hasIcon].join(' ')} />

      {/* {errors[value]?.message &&
        <Text skin='error' size="tiny" className={['mt-3']}>
          {errors[value]?.message?.toString()}
        </Text>
      } */}
    </div>
  )
}