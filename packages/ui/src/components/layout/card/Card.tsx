import { CommonProps } from "../../common";
import { CardContent } from "./CardContent";
import { CardDivider } from "./CardDivider";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardSubHeader } from "./CardSubHeader";

export interface CardProps extends CommonProps {
  width?: string;
}

export const Card = ({
  children,
  width = "100%"
}: CardProps) => {
  return (
    <div
      className="ui-card"
      style={{
        width: width,
      }}
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader;
Card.SubHeader = CardSubHeader;
Card.Divider = CardDivider;
Card.Content = CardContent;
Card.Footer = CardFooter;