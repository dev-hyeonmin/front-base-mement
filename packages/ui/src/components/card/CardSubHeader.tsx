
export interface CardSubHeaderProps {
    children?: React.ReactNode;
  }
  
  export const CardSubHeader = ({
    children,
  }: CardSubHeaderProps) => {
  
    return (
      <div className="ui-card__subtit">
        {children}
      </div>
    )
  }