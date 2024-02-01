import { CommonProps } from "../../common";

export interface ModalProps extends CommonProps {
  isOpen: boolean;
  useBackground?: boolean;
  onRequestClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
}

export const Modal = ({
  children,
  isOpen,
  useBackground = true,
  onRequestClose,
  shouldCloseOnOverlayClick = false
}: ModalProps) => {
  const backgroundStyle = useBackground ? '' : 'ui-modal--clear';

  return (
    <div
      className={['ui-modal', backgroundStyle, isOpen ? 'ui-modal--active' : ''].join(' ')}
      onClick={shouldCloseOnOverlayClick ? onRequestClose : () => {}}>
      {children}
    </div>
  )
}