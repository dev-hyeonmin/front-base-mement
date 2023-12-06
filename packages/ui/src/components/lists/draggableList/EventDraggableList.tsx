import ReactDragListView from 'react-drag-listview';
import { ActionButton, PrimaryActionProps, SecondaryActionProps } from '../../actions/ActionButton';
import { CommonProps } from '../../common';
import { EventDraggableListItem, EventDraggableListItemProps } from './EventDraggableListItem';

export interface EventDraggableListProps extends CommonProps {
  data: EventDraggableListItemProps[];
  setData: React.Dispatch<React.SetStateAction<EventDraggableListItemProps[]>>;
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}

export const EventDraggableList = ({
  className = [],
  data = [],
  setData,
  numOfVisibleSecondaryActions = 0,
  primaryActions = [],
  secondaryActions = []
}: EventDraggableListProps) => {
  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const copyData = [...data];
      const item = copyData.splice(fromIndex, 1)[0];
      copyData.splice(toIndex, 0, item);
      setData(() => copyData);
    },
    nodeSelector: '.event-draggable-list__item',
    handleSelector: '.event-draggable-list__drag'
  };

  return (
    <div className={["event-draggable-list", ...className].join(' ')}>
      <ReactDragListView {...dragProps}>
        {data?.map((item, index) =>
          <EventDraggableListItem
            key={`event-draggable-list__item-${index}`}
            {...item}>

            <ActionButton
              size='small'
              numOfVisibleSecondaryActions={numOfVisibleSecondaryActions}
              primaryActions={primaryActions.map((action) => ({ ...action, onClick: (event) => action.onClick && action.onClick(event, index) }))}
              secondaryActions={secondaryActions.map((action) => ({ ...action, onClick: (event) => action.onClick && action.onClick(event, index) }))}
            />
          </EventDraggableListItem>
        )}
      </ReactDragListView>
    </div>
  )
}