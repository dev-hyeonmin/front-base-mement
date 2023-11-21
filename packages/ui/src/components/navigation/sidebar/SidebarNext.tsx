import { CommonProps } from "../../common"

export interface SidebarNextProps extends CommonProps { }

export const SidebarNext = ({
  children,
  className = []
}: SidebarNextProps) => {
  return (
    <div className={["ui-sidebar__next", ...className].join(' ')}>
      {children}
    </div>
  )
}