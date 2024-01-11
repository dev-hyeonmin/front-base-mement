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

      <div className={["ui-sidebar__list", isOpen && "ui-sidebar__list--active"].join(" ")}>
        <div className="ui-sidebar__list--inner">
          {children}
        </div>
      </div>
    </div>
  )
}