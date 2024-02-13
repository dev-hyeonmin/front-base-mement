export interface ButtonProps {
  disabled?: boolean;
  label: string;
  type?: 'button' | 'submit';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  skin?: 'default' | 'primary' | 'warning';
  priority?: "primary" | "secondary";
  fluid?: boolean;
  className?: string[];
  onClick?: (event?: React.MouseEvent, index?: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled = false,
  size = 'medium',
  skin = 'default',
  priority = 'secondary',
  type = 'button',
  label,
  fluid = false,
  className = [],
  ...props
}: ButtonProps) => {
  const isDisabled = disabled ? 'ui-button--disabled' : '';
  const isFluid = fluid ? 'ui-button--full' : '';

  return (
    <button
      type={type}
      className={['ui-button', `ui-button--${size}`, `ui-button--${skin}`, `ui-button--${priority}`, isDisabled, isFluid, ...className].join(' ')}
      onClick={props.onClick}
      {...props}
    >
      {label}
    </button>
  );
};
