import { CommonProps } from '../../common';

export interface DraggableListItemProps extends CommonProps {
  title?: string;
  description?: string;
  selected?: boolean;
  disabledDrag?: boolean;
  onClick?: () => void;
}

export const DraggableListItem = ({
  children,
  className = [],
  title,
  description,
  selected = false,
  disabledDrag = false,
  onClick
}: DraggableListItemProps) => {
  const isSelected = selected ? `ui-draggable-list__item-selected` : ``;
  const isDisabled = disabledDrag ? `ui-draggable-list__drag-disabled` : `ui-draggable-list__drag`;

  return (
    <div className={["ui-draggable-list__item", isSelected, ...className].join(' ')} onClick={onClick}>
      <div className={isDisabled}>::</div>

      <div className='ui-draggable-list__item--title'>
        {title}

        {description &&
          <div className='ui-draggable-list__item--description'>
            {description}
          </div>
        }
      </div>

      {children}
    </div >
  )
}