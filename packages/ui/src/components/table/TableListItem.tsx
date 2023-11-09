import { useState } from "react";
import { TableListColumnProps, TextButton } from "..";
import { RecordsProps } from "./TableList";

export interface TableListItemProps {
  columns: TableListColumnProps[];
  record: RecordsProps;
  draggable: boolean;
  action: boolean;
  onEdit?: () => {};
  onDelete?: () => {};
}


export const TableListItem = ({
  record,
  columns,
  draggable,
  action,
  onEdit,
  onDelete
}: TableListItemProps) => {
  const [showSecoundaryAction, setShowSecoundaryAction] = useState(false);

  const toggleShowSecoundaryAction = () => {
    setShowSecoundaryAction((currentValue) => !currentValue);
  }

  return (
    <tr key={`list-line--${record.id}`}>
      {draggable &&
        <td className="ui-list--drag">::</td>
      }

      {columns.map((column, columnIndex) => {
        const style = { width: column.width };
        return (
          <td
            key={`list-item--${columnIndex}`}
            style={style}
            className={["list-header-item", `list-item--${column.align}`].join(' ')}>
            {record[column.name]}
          </td>
        )
      })}

      {action &&
        <td>
          <button type="button" className="ui-table__cell-button" onClick={() => toggleShowSecoundaryAction()}></button>

          {showSecoundaryAction &&
            <div className="ui-table__cell-secoundary-action">
              <TextButton label="edit" size="small" onClick={() => onEdit}/>
              <TextButton label="delete" size="small" skin="warning" onClick={() => onDelete}/>
            </div>
          }
        </td>
      }
    </tr>
  )
}