import { Button } from '../Button/Button';
import './modal.css';

export interface ModalProps {
  /**
   * The title of the alarm.
   */
  title: string;
  /**
   * The content of the alarm. (You can input HTML code.)
   */
  content: string;
  /**
   * Function called when the modal is closed
   */
  onClosed: () => void;
  /**
   * Function called when click success button on the modal
   */
  onConfirm: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  title,
  content,
  ...props
}: ModalProps) => {

  return (
    <div className='modal'>
      <div className='modal-header'>{title}</div>
      <div className='modal-content' dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className='modal-footer'>
        <div className='modal-footer-btns'>
          <Button
            label="Cancel"
            onClick={() => props.onClosed()}
          />
          <Button
            label="Button"
            onClick={() => props.onConfirm()}
            primary
          />
        </div>
      </div>
    </div>
  );
};