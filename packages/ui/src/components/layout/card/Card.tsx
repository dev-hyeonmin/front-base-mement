import { CommonProps } from "../../common";
import { CardContent } from "./CardContent";
import { CardDivider } from "./CardDivider";
import { CardFooter } from "./CardFooter";
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
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={["ui-card", ...className].join(' ')} onClick={(e) => onClick(e)}>
      {children}
    </div>
  )
}

Card.Header = CardHeader;
Card.SubHeader = CardSubHeader;
Card.Divider = CardDivider;
Card.Content = CardContent;
Card.Footer = CardFooter;