
export interface DropDownLayoutOptionProps {
  id: string | number;
  value: string | number;
  disabled?: boolean;
}

export interface DropDownLayoutProps {
  options: DropDownLayoutOptionProps[];
  defaultSelectedId?: string | number;
  maxHeightPixels?: string;
  onSelect?: (event: React.MouseEvent, option: DropDownLayoutOptionProps) => void;
}

export const DropDownLayout = ({
  options,
  defaultSelectedId,
  maxHeightPixels,
  onSelect = () => {}
}: DropDownLayoutProps) => {  
  const onClick = (event: React.MouseEvent, option: DropDownLayoutOptionProps) => {
    onSelect(event, option);
  }

  return (
    <div className="ui-dropdown__layout" style={{maxHeight: maxHeightPixels}}>
      {options.map(option =>
        <div 
          key={`option-${option.id}`}
          onClick={(event) => onClick(event, option)}
          className={[
            "ui-dropdown__layout-option",
            defaultSelectedId === option.id ? 'ui-dropdown__layout-option--active' : '',
            option.disabled ? 'ui-dropdown__layout-option--disabled' : ''            
            ].join(' ')}>
          {option.value}
        </div>
      )}
    </div>
  );
};