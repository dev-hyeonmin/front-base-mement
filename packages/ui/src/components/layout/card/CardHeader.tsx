import { CommonProps } from "../../common";

export interface CardHeaderProps extends CommonProps {
  title?: string;
  subtitle?: string;
  suffix?: React.ReactNode;
}

export const CardHeader = ({
  className = [],
  children,
  title,
  subtitle,
  suffix
}: CardHeaderProps) => {

  return (
    <div className={["ui-card__tit", ...className].join(' ')}>
      {children && children}
      {title &&
        <div className="ui-card__tit-main">
          {title}
          {subtitle && <div className="ui-card__tit-sub">{subtitle}</div>}
        </div>}

      {suffix &&
        <div className="ui-card__suffix">
          {suffix}
        </div>
      }
    </div>
  )
}