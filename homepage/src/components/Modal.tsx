import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  closeModal?: () => {}
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  return (
    <div className='modal' onClick={() => closeModal}>
      <div className='modal-inner'>
        {children}
      </div>
    </div>
  );
}

export default Modal;