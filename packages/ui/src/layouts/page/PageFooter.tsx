import { CommonProps } from "../../common"

export interface PageFooterProps extends CommonProps {
  divider?: boolean;
  fixed?: boolean;
}

export const PageFooter = ({
  children,
  className = [],
  divider = false,
  fixed = false
}: PageFooterProps) => {
  return (
    <div 
      className={[
        "ui-page__footer", 
        divider ? 'ui-page__footer--divider' : '', 
        fixed ? 'ui-page__footer--fixed' : '',
        ...className].join(' ')}
      >
      {children}
      {/* <div className="ui-page__footer-start">
      </div>

      <div className="ui-page__footer-center">
      </div>

      <div className="ui-page__footer-end">
      </div> */}
    </div>
  )
}

export const PageFooterStart = ({
  children,
  className = []
}: CommonProps) => {
  return (
    <div className={["ui-page__footer-start", ...className].join('')}>
      {children}
    </div>
    );
};

export const PageFooterCenter = ({
  children,
  className = []
}: CommonProps) => {
  return (
    <div className={["ui-page__footer-center", ...className].join('')}>
      {children}
    </div>
    );
};

export const PageFooterEnd = ({
  children,
  className = []
}: CommonProps) => {
  return (
    <div className={["ui-page__footer-end", ...className].join('')}>
      {children}
    </div>
    );
};

PageFooter.Start = PageFooterStart;
PageFooter.Center = PageFooterCenter;
PageFooter.End = PageFooterEnd;