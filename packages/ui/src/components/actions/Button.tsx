export interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  warning?: boolean;
  backgroundColor?: string;
  label: string;
  type?: 'button' | 'submit';
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
  className?: string[];
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  disabled = false,
  warning = false,
  size = 'medium',
  type = 'button',
  backgroundColor,
  label,
  fluid = false,
  className = [],
  ...props
}: ButtonProps) => {
  const mode = primary ? 'ui-button--primary' : warning ? 'ui-button--warning' : 'ui-button--secondary';
  const isDisabled = disabled ? 'ui-button--disabled' : '';
  const isFluid = fluid ? 'ui-button--full' : '';

  return (
    <button
      type={type}
      className={['ui-button', `ui-button--${size}`, mode, isDisabled, isFluid, ...className].join(' ')}
      style={{ backgroundColor }}
      onClick={props.onClick}
      {...props}
    >
      {label}
    </button>
  );
};
