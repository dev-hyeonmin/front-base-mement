import React from 'react';
import { TableActionCellProps } from './TableActionCell';

export interface TableListOptionProps {
  value: string | React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

export interface TableListItemProps {
  index: number;
  options: TableListOptionProps[];
  secondaryActions?: TableActionCellProps[];
  checkbox?: boolean;
  checked?: boolean;
  draggable?: boolean;
  onChecked?: () => void;
}

export const TableListItem = ({
  index,
  options,
  checkbox = false,
  checked = false,
  draggable,
  onChecked = () => { },
}: TableListItemProps) => {
  return (
    <tr>
      {checkbox &&
        <td className={['ui-table__checkbox', `ui-table__column--${checked ? 'checked' : ''}`].join(' ')}>
          {/* <Checkbox
            id={`ui-table__column-${index}`}
            checked={checked}
            onChange={onChecked} /> */}
        </td>
      }

      {draggable &&
        <td className='ui-table__drag ui-table__drag-button'>::</td>
      }
      
      {options.map((option, index) =>
        <td
          key={`ui-table__column-${index}`}
          style={{ textAlign: option.align }}>
          {option.value}
        </td>
      )}
    </tr>
  )
}