import { CommonProps } from "../../common";

export interface ModalBackgroundProps extends CommonProps {
  onClose?: () => void;
}

export const ModalBackground = ({
  children,
  onClose
}: ModalBackgroundProps) => {
  return (
    <div className="ui-modal__background" onClick={onClose}>
      {children}
    </div>
  )
}