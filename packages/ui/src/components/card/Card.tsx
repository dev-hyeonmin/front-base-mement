import { CommonProps } from "../../common";
import { CardContent } from "./CardContent";
import { CardDivider } from "./CardDivider";
import { CardHeader } from "./CardHeader";
import { CardSubHeader } from "./CardSubHeader";

export interface CardProps extends CommonProps{
  description?: string;
  columns?: 1 | 2 | 3;
}

export const Card = ({
  children,
  className = [],
}: CardProps) => {

  return (
    <div className={["ui-card", ...className].join(' ')}>
      {children}
    </div>
  )
}

Card.Header = CardHeader;
Card.SubHeader = CardSubHeader;
Card.Divider = CardDivider;
Card.Content = CardContent;