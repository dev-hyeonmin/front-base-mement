import { useState } from "react";
import { Button, ButtonProps } from ".";
import { Box } from "..";
import { IconButton, IconButtonProps } from "./IconButton";

export interface SecondaryActionProps extends IconButtonProps{
  text?: string;
  icon?: React.ReactNode;
}

export interface PrimaryActionProps extends ButtonProps {}

export interface ActionButtonProps {
  icon: any;
  size?: 'tiny' | 'small' | 'medium' | 'large';
  numOfVisibleSecondaryActions?: number;
  primaryActions?: PrimaryActionProps[];
  secondaryActions?: SecondaryActionProps[];
}


export const ActionButton = ({
  icon,
  size = 'medium',
  numOfVisibleSecondaryActions = 0,
  primaryActions,
  secondaryActions
}: ActionButtonProps) => {
  const [primaryActionState, setPrimaryActionState] = useState(false);
  const togglePrimaryActionState = () => {
    setPrimaryActionState((currentValue) => !currentValue);
  }

  return (
    <div className="ui-action-button">
      <IconButton
        priority='secondary'
        size={size}
        onClick={() => togglePrimaryActionState()}>
        <img src={icon} />
      </IconButton>

      {(primaryActions && primaryActionState) &&
        <Box className={['ui-action-button--primary-action']} gap="3px">
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
    </div>
  );
};
