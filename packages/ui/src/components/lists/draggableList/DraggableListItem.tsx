import { PrimaryActionProps, SecondaryActionProps } from '../../actions/ActionButton';
import { CommonProps } from '../../common';

export interface DraggableListItemProps extends CommonProps {
  selected?: boolean;
  disabledDrag?: boolean;
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}

export const DraggableListItem = ({
  children,
  className = [],
  selected = false,
  disabledDrag = false
}: DraggableListItemProps) => {
  const isSelected = selected ? `ui-draggable-list__item-selected` : ``;
  const isDisabled = disabledDrag ? `ui-draggable-list__drag-disabled` : `ui-draggable-list__drag`;

  return (
    <div className={["ui-draggable-list__item", isSelected, ...className].join(' ')}>
      <div className={isDisabled}>::</div>

      {children}
    </div >
  )
}

export const DraggableListItemContent = ({
  children,
}: CommonProps) => {
  return (
    <div className='ui-draggbale-list__content'>
      {children}
    </div>
  );
};

DraggableListItem.Content = DraggableListItemContent;