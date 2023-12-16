import { RegisterOptions, useFormContext } from "react-hook-form";
import { CommonProps } from "../common";
import { Text } from "../typography/Text";

export interface InputAreaProps extends CommonProps {
  value: string;
  placeholder?: string;
  readonly?: boolean;
  size?: 'small' | 'medium';
  minHeight?: string;
  status?: 'error' | 'warning' | 'loading';
  registerOption?: RegisterOptions;
}

export const InputArea = ({
  className = [],
  placeholder,
  readonly = false,
  size = 'medium',
  minHeight,
  status,
  value,
  registerOption = {}
}: InputAreaProps) => {
  const { register } = useFormContext();


  return (
    <div className={["ui-inputarea", `ui-inputarea--${status}`, ...className].join(' ')}>
      <textarea
        {...register(value, registerOption)}
        autoComplete="off"
        placeholder={placeholder}
        readOnly={readonly}
        wrap="off"
        className={[`ui-inputarea--${size}`].join(' ')}
        style={{ minHeight: minHeight }} />
    </div>
  )
}