
export interface CardHeaderProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const CardHeader = ({
  children,
  title,
  subtitle
}: CardHeaderProps) => {

  return (
    <div className="ui-card__tit">
      {children && children}
      {title && 
      <div className="ui-cart__tit-main">
        {title}
        {subtitle && <div className="ui-cart__tit-sub">{subtitle}</div>}
      </div>}
    </div>
  )
}