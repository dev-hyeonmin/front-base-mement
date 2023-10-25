
export interface PanelProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  columns?: 1 | 2 | 3;
}

export const Panel = ({
  title,
  description,
  children,
  columns = 2,
  ...props
}: PanelProps) => {

  return (
    <div className="ui-panel">
      <div className="ui-panel-tit">
        {title}
      </div>

      <div className="ui-panel-description">
        {description}
      </div>

      <div className={`ui-panel-content panel-columns--0${columns}`}>
        {children}
      </div>
    </div>
  )
}