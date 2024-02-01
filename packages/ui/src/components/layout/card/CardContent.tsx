import { Box } from "../..";
import { CommonProps } from "../../common";

export interface CardContentProps extends CommonProps {}

export const CardContent = ({
  children
}: CardContentProps) => {
  return (
    <Box width="100%" padding="0 18px 24px" direction="vertical">
      {children}
    </Box>
  )
}