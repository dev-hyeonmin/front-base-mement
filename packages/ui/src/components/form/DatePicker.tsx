import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, InputProps } from '..';
import { CustomCalendar } from './Calendar';

export interface DatePickerProps extends InputProps{

}

export const DatePicker = ({
  value = "",
  ...props
}: DatePickerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setValue, getValues } = useFormContext();
  const [calendarState, setCalendarState] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setCalendarState(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref]);

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
    <div className="ui-calendar-input" onClick={() => openCalendar()}  ref={ref}>
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