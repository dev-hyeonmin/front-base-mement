import { CommonProps } from "../../common";

export interface BoxProps extends CommonProps {
  width?: string;
  height?: string;
  direction?: "horizontal" | "vertical";
  gap?: string;
  align?: "left" | "right" | "center" | "space-between",
  verticalAlign?:  "top" | "middle" | "bottom" | "space-between",
  padding?: string;
  margin?: string;
}

export const Box = ({
  children,
  className = [],
  width,
  height,
  direction = "horizontal",
  gap,
  align,
  verticalAlign,
  padding,
  margin
}: BoxProps) => {
  const directionType = direction === "horizontal" ? "row" : "column";

  return (
    <div 
      className={[
        "ui-box",
        `ui-box--${directionType}`,
        `ui-box--align-${align}`,
        `ui-box--vertical-${verticalAlign}`,
        ...className].join(' ')
      }
      style={{
        width: width,
        height: height,
        gap: gap,
        padding: padding,
        margin: margin
      }}
    >
      {children}
    </div>
  )
}