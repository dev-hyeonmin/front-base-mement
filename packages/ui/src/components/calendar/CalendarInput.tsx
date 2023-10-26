import { useState } from 'react';
import { CustomCalendar, Input, InputProps } from '..';

export interface CalendarInputProps extends InputProps {
  defaultValue?: string;
}

export const CalendarInput = ({
  defaultValue,
  ...props
}: CalendarInputProps) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : "");
  const [calendarState, setCalendarState] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const getSelectValue = (value: string) => {
    if (value) {
      setValue(value);
    }

    closeCalendar();
  };

  const openCalendar = () => {
    setCalendarState(true);
  }

  const closeCalendar = () => {
    setCalendarState(false);
  };

  return (
    <div className="ui-calendar-input">
      <Input
        {...props}
        value={value}
        icon="calendar"
        onChange={onChange}
        onFocus={openCalendar}
      />

      {calendarState &&
        <CustomCalendar
          defaultValue={value}
          onChange={getSelectValue}
          onClose={closeCalendar}
        />
      }
    </div>
  );
};