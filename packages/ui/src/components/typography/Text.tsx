import { CommonProps } from "../../common";

export interface TextProps extends CommonProps {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
  skin?: 'standard' | 'error' | 'disabled' | 'primary';
}

export const Text = ({
  children,
  className = [],
  size = 'medium',
  weight = 'normal',
  skin = 'standard'
}: TextProps) => {

  return (
    <div className={[`ui-text`, `ui-text--${size}`, `ui-text--${weight}`, `ui-text--${skin}`, ...className].join(' ')}>
      {children}
    </div>
  )
}