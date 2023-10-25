import { TableListProps } from "..";

export const TableListItem = ({
  records,
  columns
}: TableListProps) => {
  return (
    <tbody>
      {records.map((record, recordIndex) =>
        <tr key={`list-line--${recordIndex}`}>
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