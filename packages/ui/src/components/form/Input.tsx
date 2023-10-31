
export interface InputProps {
  essential?: boolean;
  label?: string;
  value?: string;
  readonly?: boolean;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  icon?: "calendar";

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
export const Input = ({
  label,
  placeholder,
  essential = false,
  readonly = false,
  icon,
  type = 'text',
  size = 'medium',
  ...props
}: InputProps) => {
  const mode = readonly ? 'ui-input--readonly' : '';
  const hasIcon = icon ? `ui-input--icon ui-input--icon__${icon}` : '';

  return (
    <div className="ui-input">
      <label>
        {label}
        {essential &&
          <em>*</em>
        }
      </label>
      <input
        type={type}
        placeholder={placeholder}
        readOnly={readonly}
        value={props.value}
        className={[`ui-input--${size}`, mode, hasIcon].join(' ')}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur} />
    </div>
  )
}