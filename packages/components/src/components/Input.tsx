
export interface InputProps {
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
  placeholder,
  readonly = false,
  size = 'medium',
  ...props
}: InputProps) => {
  const mode = readonly ? 'storybook-input--readonly' : '';

  return (
    <input
      type='text'
      placeholder={placeholder}
      readOnly={readonly}
      value={props.value}
      className={['storybook-input', `storybook-input--${size}`, mode].join(' ')} />
  )
}