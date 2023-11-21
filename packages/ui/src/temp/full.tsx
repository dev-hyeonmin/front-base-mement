import { CommonProps } from "../components/common"


export interface LayoutFullProps extends CommonProps { }

export const LayoutFull = ({
  children,
  className = []
}: LayoutFullProps) => {
  return (
    <div className={["ui-wrapper", "ui-wrapper__full", ...className].join(' ')}>
      {children}
    </div>
  )
}