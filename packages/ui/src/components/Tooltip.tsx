
export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  align?: 'left' | 'center'
}

export const Tooltip = ({
    children,
    content,
    align = 'left'
}: TooltipProps) => {
  return (
    <div className="ui-tooltip">
        {children}

        <div className={["ui-tooltip-box", `ui-tooltip--${align}`].join(' ')}>
            {content}
        </div>
    </div>
  )
}