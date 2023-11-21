import { CommonProps } from "../../common";

export interface CellProps extends CommonProps {
  span?: number;
  rows?: number;
}

export const Cell = ({
  children,
  className = [],
  span = 12,
  rows = 1,
}: CellProps) => {
  return (
    <div 
      className={["ui-layout__cell", ...className].join(' ')}
      style={{
        gridArea: `span ${rows} / span ${span} / auto / auto`
      }}>
      {children}
    </div>
  )
}