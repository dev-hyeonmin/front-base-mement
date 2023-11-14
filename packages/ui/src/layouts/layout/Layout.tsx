import { CommonProps } from "../../common";

export interface LayoutProps extends CommonProps {
  gap?: string;
  rowHeight?: string;
  justifyItems?: 'end';
}

export const Layout = ({
  children,
  className = [],
  gap,
  rowHeight,
  justifyItems
}: LayoutProps) => {
  return (
    <div
      className={["ui-layout", `ui-layout--${justifyItems}`, ...className].join(' ')}
      style={{
        gap: gap,
        gridAutoRows: rowHeight
      }}>
      {children}
    </div>
  )
}