import { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from ".";
import { Box } from "..";
import SettingIcon from '../../public/settings.png';
import { IconButton, IconButtonProps } from "./IconButton";

export interface SecondaryActionProps extends IconButtonProps {
  text?: string;
  icon?: React.ReactNode;
}

export interface PrimaryActionProps extends ButtonProps { }

export interface ActionButtonProps {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}


export const ActionButton = ({
  size = 'medium',
  numOfVisibleSecondaryActions = 0,
  primaryActions,
  secondaryActions
}: ActionButtonProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);  
  const [secondaryState, setSecondaryState] = useState(false);
  const toggleSecondaryState = () => {
    setSecondaryState((currentValue) => !currentValue);
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSecondaryState(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [dropdownRef]);

  return (
    <div className="ui-action-button" ref={dropdownRef}>
      {primaryActions &&
        <Box className={['ui-action-button--primary']} gap="3px">
          {primaryActions.map((action, index) =>
            <Button key={`primary-action-${index}`} {...action} />
          )}

          {secondaryActions &&
            secondaryActions?.slice(0, numOfVisibleSecondaryActions).map((action, index) =>
              <IconButton key={`primary-secondary-action-${index}`} {...action}>
                {action.icon}
              </IconButton>
            )
          }
        </Box>
      }

      {(secondaryActions && secondaryState) &&
        <ul className='ui-action-button--secondary'>
          {secondaryActions.slice(numOfVisibleSecondaryActions, secondaryActions.length).map((action, index) =>
            <li key={`action-button--secondary-option-${index}`} onClick={action.onClick}>
              {action.icon}
              {action.text}
            </li>
          )}
        </ul>
      }

      <IconButton
        priority='secondary'
        size={size}
        onClick={() => toggleSecondaryState()}>
        <img src={SettingIcon} />
      </IconButton>
    </div>
  );
};
