import { useEffect, useRef, useState } from "react";
import { Input } from "..";
import { CommonProps } from "../common";
import { DropDownLayout, DropDownLayoutOptionProps } from "./DropDownLayout";

export interface DropDownProps extends CommonProps {
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  defaultValue?: string;
  options: DropDownLayoutOptionProps[];
  onSelect?: (event: React.MouseEvent, option: DropDownLayoutOptionProps) => void;
}

export const DropDown = ({
  size,
  placeholder,
  defaultValue = "",
  options,
  onSelect
}: DropDownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [layoutStatus, setLayoutStatus] = useState(false);

  const toggleLayout = () => {
    setLayoutStatus(currentValue => !currentValue);
  }

  const onLayoutSelect = (event: React.MouseEvent, selectOption: DropDownLayoutOptionProps) => {
    if (onSelect) {
      onSelect(event, selectOption);
    }
    setValue(selectOption.name + "");
    setLayoutStatus(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setLayoutStatus(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref]);

  return (
    <div className="ui-dropdown" ref={ref}>
      <Input size={size} placeholder={placeholder} value={value} readonly onClick={() => toggleLayout()} />

      {layoutStatus &&
        <DropDownLayout options={options} onSelect={onLayoutSelect} />
      }
    </div>
  );
};