import { CommonProps } from "../common";

export interface IconButtonProps extends CommonProps{
  disabled?: boolean;
  skin?: "standard" | "light" | "warning";
  priority?: "primary" | "secondary";
  size?: 'tiny' | 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
}


export const IconButton = ({
  children,
  className = [],
  disabled = false,
  skin = "standard",
  priority = "primary",
  size = 'medium',
  backgroundColor,
  onClick
}: IconButtonProps) => {
  const isDisabled = disabled ? 'ui-button--disabled' : '';

  return (
    <button
      type="button"
      className={['ui-icon-button', `ui-icon-button--${size}`, `ui-icon-button--${skin}--${priority}`, isDisabled, ...className].join(' ')}
      style={{backgroundColor: backgroundColor}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
