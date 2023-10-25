import { TableListHeader } from "./TableListHeader";
import { TableListItem } from "./TableListItem";


interface RecordsProps {
  [key: string]: string;
}

export interface TableListColumnProps {
  title: string;
  name: string;
  width?: string;
  align?: 'center' | 'left' | 'right';
  infoTooltipProps?: any;
}

export interface TableListProps {
  columns: TableListColumnProps[];
  records: RecordsProps[];
}

export const TableList = ({
  columns,
  records,
}: TableListProps) => {
  return (
    <table className={["ui-list"].join(' ')}>
      <TableListHeader columns={columns} />
      <TableListItem columns={columns} records={records} />
    </table>
  )
}