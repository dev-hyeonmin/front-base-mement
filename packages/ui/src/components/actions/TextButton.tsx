
export interface TextButtonProps {
  label?: string;
  fluid?: boolean;
  size?: 'small' | 'medium' | 'large';
  skin?: 'default' | 'primary' | 'warning' | 'disabled';
  underline?: 'onHover' | 'always';
  onClick?: (event?: React.MouseEvent, index?: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextButton = ({
  label,
  fluid = false,
  size = 'medium',
  skin = 'default',
  underline,
  onClick,
}: TextButtonProps) => {
  const sizeStyle = `ui-button-text--${size}`;
  const skinStyle = `ui-color-${skin}`;
  const fluidStyle = fluid ? 'ui-button-text--full' : '';
  const underLineStyle = `ui-button-text--underline-${underline}`;

  return (
    <button
      type="button"
      className={['ui-button-text', sizeStyle, skinStyle, fluidStyle, underLineStyle].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
