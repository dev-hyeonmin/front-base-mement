import { CommonProps } from "../../common";

export interface SidebarProps extends CommonProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Sidebar = ({
  children,
  className = [],
  header,
  footer
}: SidebarProps) => {
  return (
    <div className={["ui-sidebar", ...className].join(' ')}>
      {header &&
        <div className={["ui-sidebar__header", ...className].join(' ')}>
          {header}
        </div>
      }

      {children}

      {footer &&
        <div className={["ui-sidebar__footer", ...className].join(' ')}>
          {footer}
        </div>
      }
    </div>
  )
}