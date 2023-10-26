
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
}
export const Input = ({
  label,
  placeholder,
  essential = false,
  readonly = false,
  size = 'medium',
  ...props
}: InputProps) => {
  const mode = readonly ? 'ui-input--readonly' : '';

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
        className={[`ui-input--${size}`, mode].join(' ')} />
    </div>
  )
}