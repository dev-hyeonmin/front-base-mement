import { useState } from 'react';
import ReactDragListView from 'react-drag-listview';
import { TableListHeader } from "./TableListHeader";
import { TableListItem } from "./TableListItem";

interface RecordsProps {
  [key: string]: string | React.ReactNode;
}

export interface TableListColumnProps {
  title: string;
  name: string;
  width?: string;
  align?: 'center' | 'left' | 'right';
  infoTooltip?: string;
}

export interface TableListProps {
  columns: TableListColumnProps[];
  records: RecordsProps[];
  draggable?: boolean;
}

export const TableList = ({
  columns,
  records,
  draggable = false
}: TableListProps) => {
  const [listRecords, setListRecords] = useState<RecordsProps[]>(records);

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const data = [...listRecords];
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      setListRecords(() => data);
    },
    nodeSelector: 'tr',
    handleSelector: '.ui-list--drag'
  };

  return (
    <ReactDragListView {...dragProps}>
      <table className={["ui-list"].join(' ')}>
        <TableListHeader columns={columns} draggable={draggable} />
        <TableListItem columns={columns} records={listRecords} draggable={draggable} />
      </table>
    </ReactDragListView>
  )
}