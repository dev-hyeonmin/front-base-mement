import { Button } from "../button/Button";

export interface ModalProps {
  title: string;
  content: string;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export const Modal = ({
  title,
  content,
  cancelButtonLabel = "cancel",
  submitButtonLabel = "submit",
  ...props
}: ModalProps) => {
  const onSubmit = () => {
    props.onClose();
    if(props.onSubmit) {
      props.onSubmit();
    }
  }
  return (
    <div className="ui-modal">
      <div className="modal">
        <div className="modal-header">
          {title}

          <button type="button" onClick={() => props.onClose()}></button>
        </div>

        <div className="modal-content" dangerouslySetInnerHTML={{__html: content}}></div>

        <div className="modal-footer">
          <div className="modal-footer-btns">
            <Button label={cancelButtonLabel} onClick={() => props.onClose()} />
            <Button label={submitButtonLabel} primary onClick={() => onSubmit()}/>
          </div>
        </div>
      </div>
    </div>
  )
}