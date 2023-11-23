import { Box } from "../..";

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string[];
  align?: "left" | "right" | "center" | "space-between",
}

export const CardFooter = ({
  children,
  className = [],
  align = 'right'
}: CardFooterProps) => {

  return (
    <div className={["ui-card__footer", ...className].join(' ')}>
      <Box align={align}>
        {children}
      </Box>
    </div>
  )
}