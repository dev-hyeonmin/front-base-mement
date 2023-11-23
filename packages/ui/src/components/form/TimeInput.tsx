import { useState } from 'react';
import 'react-clock/dist/Clock.css';
import { useFormContext } from 'react-hook-form';
import { Input, InputProps } from '..';
import { DropDownLayout, DropDownLayoutOptionProps } from './DropDownLayout';

const timeArray = [
  '09:00', '09:30', '10:00', '10:30', '11:00',
  '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00',
  '16:30', '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00'
]

const formattedArray: DropDownLayoutOptionProps[] = timeArray.map(time => ({
  id: time,
  value: time
}));

export interface TimeInputProps extends InputProps { }

export const TimeInput = ({
  value = "",
  ...props
}: TimeInputProps) => {
  const { setValue, getValues } = useFormContext();
  const [timeTableState, setTimeTableState] = useState(false);

  const onSelect = (event: React.MouseEvent, selectOption: DropDownLayoutOptionProps) => {
    setValue(value, selectOption.id);
    closeTimetable(event);
  };

  const openTimetable = () => {
    setTimeTableState(true);
  }

  const closeTimetable = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTimeTableState(false);
  };

  return (
    <div className="ui-time-input" onClick={() => openTimetable()}>
      <Input
        {...props}
        value={value}
      />

      {timeTableState &&
        <div className='ui-timepicker'>
          <DropDownLayout 
            options={formattedArray}
            onSelect={onSelect}
            defaultSelectedId={getValues(value)}
            maxHeightPixels="170px"/>
        </div>
      }
    </div>
  );
};