import { CommonProps } from "../../common"
import { PageFooter, PageFooterCenter, PageFooterEnd, PageFooterStart } from "./PageFooter";
import { PageHeader } from "./PageHeader";

export interface PageProps extends CommonProps {}

export const Page = ({
  children,
  className = []
}: PageProps) => {
  return (
    <div className={["ui-page", ...className].join(' ')}>
      {children}
    </div>
  )
}

export const PageContent = ({
  children,
  className = []
}: CommonProps) => {
  return (
    <div className={["ui-page__content", ...className].join('')}>
      {children}
    </div>
    );
};


Page.Header = PageHeader;
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Footer.Start = PageFooterStart;
Page.Footer.Center = PageFooterCenter;
Page.Footer.End = PageFooterEnd;