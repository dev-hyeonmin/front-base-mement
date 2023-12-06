import { CommonProps } from '../../common';

export interface EventDraggableListItemProps extends CommonProps {
  title?: string;
  description?: string;
  selected?: boolean;
  disabledDrag?: boolean;
  onClick?: () => void;
}

export const EventDraggableListItem = ({
  children,
  className = [],
  title,
  description,
  selected = false,
  disabledDrag = false,
  onClick
}: EventDraggableListItemProps) => {
  const isSelected = selected ? `event-draggable-list__item-selected` : ``;
  const isDisabled = disabledDrag ? `event-draggable-list__drag-disabled` : `event-draggable-list__drag`;

  return (
    <div className={["event-draggable-list__item", isSelected, ...className].join(' ')} onClick={onClick}>
      <div className={isDisabled}>::</div>

      <div className='event-draggable-list__item--title'>
        {title}

        {description &&
          <div className='event-draggable-list__item--description'>
            {description}
          </div>
        }
      </div>

      {children}
    </div >
  )
}