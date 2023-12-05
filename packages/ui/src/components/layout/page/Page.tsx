
import { CommonProps } from "../../common";
import { PageFooter, PageFooterCenter, PageFooterEnd, PageFooterStart } from "./PageFooter";
import { PageHeader } from "./PageHeader";

export interface PageProps extends CommonProps {
  fixed?: boolean; // card footer fixed 여부
}

export const Page = ({
  children,
  className = [],
}: PageProps) => {
  return (
    <div className={["ui-page", ...className].join(' ')}>
      {children}
    </div>
  )
}

export const PageContent = ({
  children,
  className = [],
  fixed = false
}: PageProps) => {
  return (
    <div className={["ui-page__content", fixed ? 'ui-page__content-fixed' : '', ...className].join(' ')}>
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