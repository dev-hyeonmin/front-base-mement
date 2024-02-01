import { useEffect, useRef, useState } from "react";
import { Text } from "..";
import { CommonProps } from "../common";
import { DropDownLayout, DropDownLayoutOptionProps } from "./DropDownLayout";

export interface DropDownProps extends CommonProps {
  size?: 'tiny' | 'small' | 'medium';
  border?: 'standard' | 'round' | 'bottomLine' | 'none';
  width?: string;
  placeholder?: string;
  defaultValue?: string;
  options: DropDownLayoutOptionProps[];
  onSelect?: (event: React.MouseEvent, option: DropDownLayoutOptionProps) => void;
}

export const DropDown = ({
  size = "small",
  border,
  width,
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
    <div className="ui-dropdown" ref={ref} style={{width: width}}>
      {/* <Input size={size} placeholder={placeholder} value={value} readonly onClick={() => toggleLayout()} /> */}
      <div
        className={["ui-dropdown__selector", `ui-dropdown__selector--${size}`, `ui-dropdown__selector--${border}`].join(' ')}        
        onClick={() => toggleLayout()}>
        <Text size={size}>
          {value ? value : placeholder}
        </Text>
      </div>

      {layoutStatus &&
        <DropDownLayout options={options} onSelect={onLayoutSelect} />
      }
    </div>
  );
};