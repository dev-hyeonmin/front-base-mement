import ReactDragListView from 'react-drag-listview';
import { ActionButton, PrimaryActionProps, SecondaryActionProps } from '../../actions/ActionButton';
import { CommonProps } from '../../common';
import { DraggableListItem } from './DraggableListItem';

export interface RecordsProps {
  [key: string]: any;
}

export interface DraggableListProps extends CommonProps {
  data: RecordsProps[];
  setData: React.Dispatch<React.SetStateAction<any>>;
  render: (item: RecordsProps, index: number) => string | React.ReactNode;
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}

export const DraggableList = ({
  className = [],
  data = [],
  setData,
  render,
  numOfVisibleSecondaryActions = 0,
  primaryActions = [],
  secondaryActions = []
}: DraggableListProps) => {
  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const copyData = [...data];
      const item = copyData.splice(fromIndex, 1)[0];
      copyData.splice(toIndex, 0, item);
      setData(() => copyData);
    },
    nodeSelector: '.ui-draggable-list__item',
    handleSelector: '.ui-draggable-list__drag'
  };

  const deleteEvent = (index: number) => {
    setData(() => data.filter((_, dataIndex) => index != dataIndex));
  }

  return (
    <div className={["ui-draggable-list", ...className].join(' ')}>
      <ReactDragListView {...dragProps}>
        {data.map((value, index) =>
          <DraggableListItem key={index}>
            <DraggableListItem.Content>
              {render(value, index)}
            </DraggableListItem.Content>

            {(primaryActions.length > 0 || secondaryActions.length > 0) &&
              <ActionButton
                size='small'
                numOfVisibleSecondaryActions={numOfVisibleSecondaryActions}
                primaryActions={primaryActions.map((action) => ({ ...action, onClick: (event) => action.onClick && action.onClick(event, index) }))}
                secondaryActions={secondaryActions.map((action) => ({ ...action, onClick: (event) => action.onClick && action.onClick(event, index) }))}
              />
            }

            {/* <Box width='50px' align='center' verticalAlign='middle'>
              <IconButton size='small' skin='warning' priority='secondary' onClick={() => deleteEvent(index)}>
                <img src={DeleteIcon} />
              </IconButton>
            </Box> */}
          </DraggableListItem>
        )}
      </ReactDragListView>
    </div>
  )
}