import { useEffect, useRef, useState } from 'react';
import { CommonProps } from '../../common';

interface SecondaryActionsProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export interface TableActionCellProps extends CommonProps {
  secondaryActions: SecondaryActionsProps[];
}

export const TableActionCell = ({
  className = [],
  secondaryActions
}: TableActionCellProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);  
  const [optionListState, setOptionListState] = useState(false);
  const toggleOptionListState = () => {
    setOptionListState((currentValue) => !currentValue);
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOptionListState(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [dropdownRef]);

  return (
    <div className={["ui-table__action-cell", ...className].join(' ')} ref={dropdownRef}>
      <button type="button" onClick={() => toggleOptionListState()}/>

      {optionListState &&
        <ul className='ui-table__action-cell--dropdown'>
          {secondaryActions.map((action, index) =>
            <li key={`action-cell-option-${index}`} onClick={action.onClick}>
              {action.icon}
              {action.text}
            </li>
          )}
        </ul>
      }
    </div >
  )
}