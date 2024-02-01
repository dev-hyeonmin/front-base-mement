import { Box } from "../..";
import { CommonProps } from "../../common";

export interface CardFooterProps extends CommonProps{
  align?: "left" | "right" | "center" | "space-between",
}

export const CardFooter = ({
  children,
  align = 'right'
}: CardFooterProps) => {

  return (
    <Box padding="0 18px 18px" align={align} gap="7px">
      {children}
    </Box>
  )
}