import { CommonProps } from "../../common"

export interface PageHeaderProps extends CommonProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({
  className = [],
  title,
  subtitle
}: PageHeaderProps) => {
  return (
    <div className={["ui-page__header", ...className].join(' ')}>
      {title}

      <div className="ui-page__header-sub">
        {subtitle}
      </div>
    </div>
  )
}