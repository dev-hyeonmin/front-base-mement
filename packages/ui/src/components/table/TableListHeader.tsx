import { TableListColumnProps } from "..";

export interface TableListHeaderProps {
  columns: TableListColumnProps[];
}

export const TableListHeader = ({
  columns
}: TableListHeaderProps) => {
  return (
    <thead className="ui-list-header">
      <tr>
        {columns.map((column) => {
          const style = { width: column.width };
          return (
            <th
              key={`header-${column.name}`}
              style={style}
              className="list-header-item">
              {column.title}

              {column.infoTooltipProps &&
                <>
                  {/* {tooltip} */}
                </>
              }
            </th>
          )
        })}
      </tr>
    </thead>
  )
}