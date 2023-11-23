import { useState } from 'react';
import ReactDragListView from 'react-drag-listview';
import { PrimaryActionProps, SecondaryActionProps } from '../../actions/ActionButton';
import { CommonProps } from '../../common';
import { DraggableListItem, DraggableListItemProps } from './DraggableListItem';

export interface DraggableListProps extends CommonProps {
  data?: DraggableListItemProps[];
  selectedIndex?: number;
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}

export const DraggableList = ({
  className = [],
  data = [],
  selectedIndex = 0,
  numOfVisibleSecondaryActions = 0,
  primaryActions,
  secondaryActions
}: DraggableListProps) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(selectedIndex);
  const [list, setList] = useState<DraggableListItemProps[]>(data);
  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data = [...list];
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setList(data);
      setCurrentSelectedIndex(toIndex);
    },
    nodeSelector: '.ui-draggable-list__item',
    handleSelector: '.ui-draggable-list__drag'
  };

  return (
    <div className={["ui-draggable-list", ...className].join(' ')}>
      <ReactDragListView {...dragProps}>
        {list?.map((item, index) =>
          <DraggableListItem
            key={`ui-draggable-list__item-${index}`}
            selected={currentSelectedIndex === index}
            {...item}>

            <DraggableListItem.ActionButton
              size='small'
              numOfVisibleSecondaryActions={numOfVisibleSecondaryActions}
              primaryActions={primaryActions}
              secondaryActions={secondaryActions}
            />
          </DraggableListItem>
        )}
      </ReactDragListView>
    </div>
  )
}