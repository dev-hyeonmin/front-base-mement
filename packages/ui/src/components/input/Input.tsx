
export interface InputProps {
  /**
   * Is it a required input?
   */
  essential?: boolean;
  /**
   * Label to display above the input.
   */
  label?: string;
  /**
   * input content
   */
  value?: string;
  /**
   * Is the input disabled?
   */
  readonly?: boolean;
  /**
   * input placeholder
   */
  placeholder?: string;
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Please enter the image URL address. If available, an icon will be displayed inside the input on the left side.
   */
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
        type='text'
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