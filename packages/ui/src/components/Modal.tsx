import { useState } from "react";
import { Button } from "./Button";

export interface ModalProps {
  /**
   * Is the popup being displayed?
   */
  show?: boolean;
}

export const Modal = ({
  show = false,
  ...props
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(show);

  return (
    <div className="storybook-modal">
      <div className="modal">
        <div className="modal-header">
          Modal title
        </div>

        <div className="modal-content">
          Modal Content Modal Content Modal Content Modal Content Modal Content Modal Content Modal Content Modal Content Modal Content Modal Content
        </div>

        <div className="modal-footer">
          <div className="modal-footer-btns">
            <Button label="cancel" />
            <Button label="submit" primary />
          </div>
        </div>
      </div>
    </div>
  )
}