import moment from 'moment';
import Calendar from 'react-calendar';
import { TextButton } from '../..';

export interface CalendarProps {
  value?: string | Date | null;
  selectionMode?: "day" | "range";
  onChange?: (value: string, event: React.MouseEvent) => void;
  onClose?: () => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CustomCalendar = ({
  value,
  selectionMode = "day",
  onChange,
  onClose
}: CalendarProps) => {
  const selectDate = (value: Value, event: React.MouseEvent) => {
    let formattedDate = '';
    if (Array.isArray(value)) {
      // Range mode
      formattedDate = value.map(datePiece => moment(datePiece).format('YYYY-MM-DD')).join(' to ');
    } else if (value instanceof Date) {
      // Single date mode
      formattedDate = moment(value).format('YYYY-MM-DD');
    } else if (value === null) {
      // No date selected
      formattedDate = '';
    }
    
    if (onChange) {
      onChange(formattedDate, event);
    }
  }

  return (
    <div className="ui-calendar">
      <Calendar
        locale='en-GB'
        onChange={(value, event) => selectDate(value, event)}
        defaultValue={value}
        formatDay={(_, date) => moment(date).format("DD")}
        selectRange={selectionMode === "range" ? true : false} />

      {onClose &&
        <TextButton label='Close' onClick={onClose} fluid />
      }
    </div>
  );
};
