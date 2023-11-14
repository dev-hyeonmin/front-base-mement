import { CommonProps } from "../../common";

export interface TooltipProps extends CommonProps {
  content: string;
  size?: 'small' | 'medium';
  width?: string;
  placement?: 'top' | 'left' | 'bottom' | 'right'; // css 작업 아직 안함
  textAlign?: 'center';
}

export const Tooltip = ({
  children,
  content,
  size = 'medium',
  width,
  placement,
  textAlign
}: TooltipProps) => {
  return (
    <div className="ui-tooltip">
      {children}

      <div
        className={[
          "ui-tooltip__speech-bubble",
          `ui-tooltip__speech-bubble--${size}`,
          `ui-tooltip__speech-bubble--${placement}`,
          `ui-tooltip__speech-bubble--${textAlign}`].join(' ')}
        style={{width: width}}
        dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </div>
  )
}