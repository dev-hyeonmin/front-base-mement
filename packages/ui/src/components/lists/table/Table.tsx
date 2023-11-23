import React, { useState } from 'react';
import ReactDragListView from 'react-drag-listview';
import { Tooltip, TooltipProps } from '../..';
import { CommonProps } from '../../common';
import { TableListItem, TableListOptionProps } from './TableListItem';

export interface RecordsProps {
  [key: string]: string | React.ReactNode;
  highlight?: boolean;
}

export interface TableColumnProps {
  title?: string;
  align?: 'start' | 'center' | 'end';
  width?: string;
  infoTooltipProps?: TooltipProps;
  render?: (item: RecordsProps) => string | React.ReactNode;
}

export interface TableProps extends CommonProps {
  data?: RecordsProps[];
  columns: TableColumnProps[];
  titleBarVisible?: boolean;
  showSelection?: boolean;
  draggable?: boolean;
  selectedIds?: number[];
}

export const Table = ({
  className = [],
  data = [],
  columns,
  titleBarVisible = true,
  showSelection = false,
  draggable = false,
  selectedIds = [],
}: TableProps) => {
  const [list, setList] = useState<RecordsProps[]>(data);
  const [selectStatusList, setSelectStatusList] = useState(selectedIds);
  const selectAllToggle = () => {
    setSelectStatusList((currentValue) => {
      if (currentValue.length > 0) {
        return [];
      }

      return data?.map((_, index) => index);
    });
  }

  const selectEachToggle = (index: number) => {
    const listIndex = selectStatusList.find((element) => element === index);
    if (listIndex === undefined) {
      setSelectStatusList(currentValue => [index, ...currentValue]);
    } else {
      setSelectStatusList(selectStatusList.filter(id => id !== listIndex));
    }
  }

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data = [...list];
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setList(data);
    },
    nodeSelector: 'tr',
    handleSelector: '.ui-table__drag-button'
  };


  return (
    <div className={["ui-table", ...className].join(' ')}>
      <ReactDragListView {...dragProps}>
        <table>
          {titleBarVisible &&
            <thead>
              <tr>
                {showSelection &&
                  <th className='ui-table__checkbox'>
                    {/* <Checkbox id="selectAll" onChange={() => selectAllToggle()} checked={selectStatusList.length > 0} /> */}
                  </th>
                }

                {draggable &&
                  <th className='ui-table__drag'>::</th>
                }

                {columns.map((column, index) =>
                  <th
                    key={`ui-table__head-${index}`}
                    style={{ width: column.width }}
                    className={[`ui-table__column--${column.align}`].join(' ')}>
                    {column.title ? column.title : ""}

                    {column.infoTooltipProps &&
                      <Tooltip {...column.infoTooltipProps}>
                        <i></i>
                      </Tooltip>
                    }
                  </th>
                )}
              </tr>
            </thead>
          }

          <tbody>
            {list?.map((item, index) => {
              const isCheckedIndex = selectStatusList.find((element) => element === index);
              let isChecked = false;
              if (isCheckedIndex != undefined) {
                isChecked = true;
              }

              const options: TableListOptionProps[] = columns.map((column) => ({
                value: column.render ? column.render(item) : "",
                align: column.align,
              }));


              return (
                <TableListItem
                  key={`table-list__item-${index}`}
                  index={index}
                  options={options}
                  draggable={draggable}
                  checkbox={showSelection}
                  checked={isChecked}
                  onChecked={() => selectEachToggle(index)} />
              )
            })}
          </tbody>
        </table>
      </ReactDragListView>
    </div >
  )
}