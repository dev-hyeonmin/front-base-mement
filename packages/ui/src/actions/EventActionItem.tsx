import { ActionButton } from '.';
import { CommonProps } from '../common';

export interface EventActionItemProps extends CommonProps {
  label: string;
  description?: string;
  selected?: boolean;
  onClick?: () => void;
}

export const EventActionItem = ({
  children,
  className = [],
  label,
  description,
  selected = false,
  onClick
}: EventActionItemProps) => {
  return (
    <div
      className={[
        "ui-event__action-item",
        selected ? `ui-event__action-item-selected` : ``,
        ...className].join(' ')}
      onClick={onClick}>

      <div className='ui-event__action-item--label'>
        {label}

        {description &&
          <div className='ui-event__action-item--description'>
            {description}
          </div>
        }
      </div>

      {children}
      {/* <ActionButton
        icon={SettingIcon}
        size='small'
        numOfVisibleSecondaryActions={numOfVisibleSecondaryActions}
        primaryActions={primaryActions}
        secondaryActions={secondaryActions} /> */}
    </div >
  )
}

EventActionItem.ActionButton = ActionButton;