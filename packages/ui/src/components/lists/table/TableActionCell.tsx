import { ActionButton } from '../..';
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
  secondaryActions
}: TableActionCellProps) => {
  return (
    <ActionButton secondaryActions={secondaryActions}/>
    // <div className={["ui-table__action-cell", ...className].join(' ')} ref={dropdownRef}>
    //   <button type="button" onClick={() => toggleOptionListState()}/>

    //   {optionListState &&
    //     <ul className='ui-table__action-cell--dropdown'>
    //       {secondaryActions.map((action, index) =>
    //         <li key={`action-cell-option-${index}`} onClick={action.onClick}>
    //           {action.icon}
    //           {action.text}
    //         </li>
    //       )}
    //     </ul>
    //   }
    // </div >
  )
}