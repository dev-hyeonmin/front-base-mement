import { CommonProps } from "../../common";

export interface ModalProps extends CommonProps {
  isOpen: boolean;
  onRequestClose?: () => void;
  shouldCloseOnOverlayClick?: boolean
}

export const Modal = ({
  children,
  isOpen,
  onRequestClose,
  shouldCloseOnOverlayClick = false
}: ModalProps) => {
  return (
    <div
      className={["ui-modal", `ui-modal--${isOpen ? 'active' : 'close'}`].join(' ')}
      onClick={shouldCloseOnOverlayClick ? onRequestClose : () => {}}>
      {children}
    </div>
  )
}