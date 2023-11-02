import { CommonProps } from "../common";

export interface LayoutDefaultProps extends CommonProps { }

export const LayoutDefault = ({
  children,
  className = []
}: LayoutDefaultProps) => {
  return (
    <div className={["ui-wrapper", "ui-wrapper__default", ...className].join(' ')}>
      {children}
    </div>
  )
}