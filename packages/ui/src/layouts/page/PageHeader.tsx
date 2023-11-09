import { CommonProps } from "../../common";

export interface PageHeaderProps extends CommonProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({
  children,
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

      {children}
    </div>
  )
}

export const PageHeaderAction = ({
  children,
  className = []
}: CommonProps) => {
  return (
    <div className={["ui-page__header-actions", ...className].join(' ')}>
      {children}
    </div>
  );
};

PageHeader.Action = PageHeaderAction;