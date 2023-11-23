import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, InputProps } from '..';
import { CustomCalendar } from './Calendar';

export interface DatePickerProps extends InputProps{

}

export const DatePicker = ({
  value = "",
  ...props
}: DatePickerProps) => {
  const { setValue, getValues } = useFormContext();
  const [calendarState, setCalendarState] = useState(false);

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const getSelectValue = (selectDate: string, event:React.MouseEvent) => {
    setValue(value, selectDate);
    closeCalendar(event);
  };

  const openCalendar = () => {
    setCalendarState(true);
  }

  const closeCalendar = (e:React.MouseEvent) => {
    e.stopPropagation();
    setCalendarState(false);
  };

  return (
    <div className="ui-calendar-input" onClick={() => openCalendar()}>
      <Input
        {...props}
        value={value}
        icon="calendar"
      />

      {calendarState &&
        <CustomCalendar
          value={getValues(value)}
          onChange={getSelectValue}
        />
      }
    </div>
  );
};