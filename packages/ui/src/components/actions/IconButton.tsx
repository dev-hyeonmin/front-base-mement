import { CommonProps } from "../common";

export interface IconButtonProps extends CommonProps{
  disabled?: boolean;
  skin?: "standard" | "light" | "warning";
  priority?: "primary" | "secondary";
  size?: 'tiny' | 'small' | 'medium' | 'large';
  onClick?: (event?: React.MouseEvent, index?: number) => void;
}


export const IconButton = ({
  children,
  className = [],
  disabled = false,
  skin = "standard",
  priority = "primary",
  size = 'medium',
  onClick
}: IconButtonProps) => {
  const isDisabled = disabled ? 'ui-button--disabled' : '';

  return (
    <button
      type="button"
      className={['ui-icon-button', `ui-icon-button--${size}`, `ui-icon-button--${skin}--${priority}`, isDisabled, ...className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
