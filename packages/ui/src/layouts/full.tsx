import React from "react";

export interface LayoutFullProps {
  children: React.ReactNode;
  className? : string[];
}

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