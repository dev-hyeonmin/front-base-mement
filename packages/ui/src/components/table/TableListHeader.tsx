
import { TableListColumnProps, Tooltip } from "..";

export interface TableListHeaderProps {
  columns: TableListColumnProps[];
  draggable?: boolean;
}

export const TableListHeader = ({
  columns,
  draggable
}: TableListHeaderProps) => {
  

  return (
    <tbody className="ui-list-header">
      <tr>
        {draggable &&
          <th className="ui-list--drag">::</th>
        }
        {columns.map((column) => {
          const style = { width: column.width };
          return (
            <th
              key={`header-${column.name}`}
              style={style}
              className="list-header-item">
              {column.title}

              {column.infoTooltip &&
                <Tooltip content={column.infoTooltip} align="center">
                  <span className="ui-list-tooltip-button"></span>
                </Tooltip>
              }
            </th>
          )
        })}
      </tr>
    </tbody>
  )
}