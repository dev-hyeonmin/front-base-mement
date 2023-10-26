import { TableListProps } from "..";

export const TableListItem = ({
  records,
  columns,
  draggable = false
}: TableListProps) => {
  return (
    <tbody>
      {records.map((record, recordIndex) =>
        <tr key={`list-line--${recordIndex}`}>
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
        </tr>
      )}
    </tbody>
  )
}