import { CommonProps } from "../../common";

export interface CardHeaderProps extends CommonProps{
  title?: string;
  subtitle?: string;
}

export const CardHeader = ({
  className = [],
  children,
  title,
  subtitle
}: CardHeaderProps) => {

  return (
    <div className={["ui-card__tit", ...className].join(' ')}>
      {children && children}
      {title && 
      <div className="ui-cart__tit-main">
        {title}
        {subtitle && <div className="ui-cart__tit-sub">{subtitle}</div>}
      </div>}
    </div>
  )
}