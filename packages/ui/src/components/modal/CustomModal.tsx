import { Button } from "../button/Button";

export interface CustomModalProps {
  title: string;
  content: React.ReactNode;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export const CustomModal = ({
  title,
  content,
  cancelButtonLabel = "cancel",
  submitButtonLabel = "submit",
  ...props
}: CustomModalProps) => {
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
        </div>

        <div className="modal-content">
            {content}
        </div>

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