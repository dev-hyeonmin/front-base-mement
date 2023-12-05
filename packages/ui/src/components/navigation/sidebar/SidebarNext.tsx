import { CommonProps } from "../../common";

export interface SidebarNextProps extends CommonProps {
  selected?: boolean;
}

export const SidebarNext = ({
  children,
  className = [],
  selected = false
}: SidebarNextProps) => {
  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  }

  return (
    <div className={["ui-sidebar__next", selected ? "ui-sidebar__next-selected" : '', ...className].join(' ')} onClick={(event) => onClick(event)}>
      {children}
    </div>
  )
}