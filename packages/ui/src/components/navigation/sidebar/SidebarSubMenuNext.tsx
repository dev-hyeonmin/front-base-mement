import { useState } from "react";
import { CommonProps } from "../../common";

export interface SidebarNextItemProps extends CommonProps {
  title: string;
  itemKey: string;
}

export const SidebarNextItem = ({
  children,
  className = [],
  title
}: SidebarNextItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(currentIsOpen => !currentIsOpen);
  };

  return (
    <div
      onClick={() => toggleIsOpen()}
      className={["ui-sidebar__next-item", isOpen ? 'ui-sidebar__next-item-active' : '', ...className].join(' ')}>
      {title}

      {isOpen &&
        <div className="ui-sidebar__next-item-list">
          {children}
        </div>
      }
    </div>
  )
}