import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';
import './modal.css';

interface ModalControlerProps {
  /**
   * The title of the alarm.
   */
  title: string;
  /**
   * The content of the alarm. (You can input HTML code.)
   */
  content: string;
  /**
   * Is it a modal for delivering warning information?
   */
  isWarning?: boolean;
  /**
   * Whether the modal is open or not
   */
  isOpen?: boolean;
  /**
   * Function called when the modal is closed
   */
  onClosed?: () => void;
  /**
   * Function called when click success button on the modal
   */
  onConfirm?: () => void;
}

export const ModalControler = ({
  isOpen = false,
  isWarning = false,
  onClosed,
  onConfirm,
  ...props
}: ModalControlerProps) => {
  const [openState, setOpenState] = useState(isOpen);
  const openModal = () => {
    setOpenState(true);
  }

  const closeModal = () => {
    if (onClosed) {
      onClosed();
    }
    setOpenState(false);
  }

  const confrimModal = () => {
    if (onConfirm) {
      onConfirm();
    }

    setOpenState(false);
  }

  return (
    <>
      <Button
        label="Button"
        onClick={() => openModal()}
        primary
      />

      {openState &&
        <Modal
          onClosed={() => closeModal()}
          onConfirm={() => confrimModal()}
          {...props}
        />
      }
    </>
  );
};