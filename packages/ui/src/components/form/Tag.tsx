import { IconButton, Text } from "..";
import closeIcon from '../../../public/close.png';
import { CommonProps } from "../common";

export interface TagProps extends CommonProps {
  value?: number | string;
  size?: 'large' | 'medium' | 'small' | 'tiny';
  theme?: 'Standard' | 'Error' | 'Warning' | 'Dark' | 'Neutral' | 'Success' | 'Light' | 'LightOutlined';
  disabled?: boolean;
  removable?: boolean;
  onTagRemove?: () => void;
}

export const Tag = ({
  children,
  value,
  size = 'tiny',
  theme = 'Standard',
  disabled = false,
  removable = true,
  onTagRemove
}: TagProps) => {

  return (
    <div className={[
      'ui-tag',
      `ui-tag--${size}`,
      `ui-tag--${theme}`,
      disabled ? 'ui-tag--disabled' : ''].join(' ')}>
      <Text size='tiny'>{children}</Text>

      {removable &&
        <IconButton size="tiny" skin='light' onClick={onTagRemove}>
          <img src={closeIcon} />
        </IconButton>
      }
    </div>
  );
};
