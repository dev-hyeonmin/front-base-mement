import { useState } from 'react';
import ReactDragListView from 'react-drag-listview';
import { ActionButton, PrimaryActionProps, SecondaryActionProps } from '../../actions/ActionButton';
import { CommonProps } from '../../common';
import { DraggableListItem, DraggableListItemProps } from './DraggableListItem';

export interface DraggableListProps extends CommonProps {
  data: DraggableListItemProps[];
  setData: React.Dispatch<React.SetStateAction<DraggableListItemProps[]>>;
  selectedIndex?: number;
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}

export const DraggableList = ({
  className = [],
  data = [],
  setData,
  selectedIndex = 0,
  numOfVisibleSecondaryActions = 0,
  primaryActions = [],
  secondaryActions = []
}: DraggableListProps) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(selectedIndex);
  // const [list, setList] = useState<DraggableListItemProps[]>(data);
  console.log(setData);
  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const copyData = [...data];
      const item = copyData.splice(fromIndex, 1)[0];
      copyData.splice(toIndex, 0, item);
      setData(() => copyData);
      setCurrentSelectedIndex(toIndex);
    },
    nodeSelector: '.ui-draggable-list__item',
    handleSelector: '.ui-draggable-list__drag'
  };

  return (
    <div className={["ui-draggable-list", ...className].join(' ')}>
      <ReactDragListView {...dragProps}>
        {data?.map((item, index) =>
          <DraggableListItem
            key={`ui-draggable-list__item-${index}`}
            selected={currentSelectedIndex === index}
            {...item}>

            <ActionButton
              size='small'
              numOfVisibleSecondaryActions={numOfVisibleSecondaryActions}
              primaryActions={primaryActions.map((action) => ({ ...action, onClick: (event) => action.onClick && action.onClick(event, index) }))}
              secondaryActions={secondaryActions.map((action) => ({ ...action, onClick: (event) => action.onClick && action.onClick(event, index) }))}
            />
          </DraggableListItem>
        )}
      </ReactDragListView>
    </div>
  )
}