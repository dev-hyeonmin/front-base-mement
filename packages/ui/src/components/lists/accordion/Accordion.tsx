import { useState } from "react";
import { CommonProps } from "../../common";

// interface AccordionItemProps extends CommonProps {
//   title: string;
// }

export interface AccordionProps extends CommonProps {
  title: string;
  draggable?: boolean;
}

export const Accordion = ({
  children,
  title,
  // draggable = false
}: AccordionProps) => {
  const [contentState, setContentStatue] = useState(false);

  const toggleContent = () => {
    setContentStatue((currentValue) => !currentValue);
  }

  return (
    <div className={["ui-accordion", contentState && "active"].join(' ')}>
      <div className="ui-accordion__header" onClick={() => toggleContent()}>
        <div className="ui-accordion__header-tit">
          {/* {draggable &&
            <div className="ui-accordion__drag ui__drag">::</div>
          } */}
          {title}
        </div>
      </div>

      <div className="ui-accordion__content">
        {children}
      </div>
    </div>
  );
};
