import { CommonProps } from "../../common";

export interface LayoutProps extends CommonProps {
  gap?: string;
  maxHeight?: string;
  rowHeight?: string;
  justifyItems?: 'end';
}

export const Layout = ({
  children,
  className = [],
  gap,
  maxHeight,
  rowHeight,
  justifyItems
}: LayoutProps) => {
  return (
    <div
      className={["ui-layout", `ui-layout--${justifyItems}`, ...className].join(' ')}
      style={{
        gap: gap,
        gridAutoRows: rowHeight,
        maxHeight: maxHeight
      }}>
      {children}
    </div>
  )
}