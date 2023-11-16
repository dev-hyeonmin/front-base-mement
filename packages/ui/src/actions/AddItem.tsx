import PlusIcon from '../../public/upload_file.png';
import { CommonProps } from "../common";

export interface AddItemProps extends CommonProps {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const AddItem = ({
  children,
  className = [],
  size = 'medium',
  onClick,
}: AddItemProps) => {
  return (
    <div className={["ui-add-item", `ui-add-item--${size}`, ...className].join(' ')} onClick={onClick}>
      <img src={PlusIcon} />
      {children}
    </div>
  );
};
