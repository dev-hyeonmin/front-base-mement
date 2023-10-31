export interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  warning?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
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
  backgroundColor,
  label,
  className = [],
  ...props
}: ButtonProps) => {
  const mode = primary ? 'ui-button--primary' : warning ? 'ui-button--warning' : 'ui-button--secondary';
  const isDisabled = disabled ? 'ui-button--disabled' : '';

  return (
    <button
      type="button"
      className={['ui-button', `ui-button--${size}`, mode, isDisabled, ...className].join(' ')}
      style={{ backgroundColor }}
      onClick={props.onClick}
      {...props}
    >
      {label}
    </button>
  );
};
