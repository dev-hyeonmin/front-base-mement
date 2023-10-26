import moment from 'moment';
import Calendar from 'react-calendar';
import { TextButton } from '..';

export interface CalendarProps {
  defaultValue?: string | Date | null;
  onChange?: (value: string) => void;
  onClose?: () => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CustomCalendar = ({
  defaultValue,
  onChange,
  onClose
}: CalendarProps) => {
  const selectDate = (value: Value) => {
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
      onChange(formattedDate);
    }
  }
  return (
    <div className="ui-calendar">
      <Calendar
        locale='en-GB'
        onChange={(value) => selectDate(value)}
        defaultValue={defaultValue}
        formatDay={(_, date) => moment(date).format("DD")} />

      {onClose &&
        <TextButton label='Close' onClick={onClose} fluid />
      }
    </div>
  );
};
