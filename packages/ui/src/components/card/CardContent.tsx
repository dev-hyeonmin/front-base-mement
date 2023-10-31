
export interface CardContentProps {
  children: React.ReactNode;
  className?: string[];
}

export const CardContent = ({
  children,
  className = ["c01"]
}: CardContentProps) => {

  return (
    <div className={["ui-card__content", ...className].join(' ')}>
      {children}
    </div>
  )
}