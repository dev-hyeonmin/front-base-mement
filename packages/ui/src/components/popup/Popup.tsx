import { CommonProps } from "../../common";
import { Button } from "../button/Button";

export interface PopupProps extends CommonProps {
  title: string;
  cancelButtonLabel?: string;
  submitButtonLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export const Popup = ({
  children,
  className = [],
  title,
  cancelButtonLabel = "cancel",
  submitButtonLabel = "submit",
  ...props
}: PopupProps) => {
  const onSubmit = () => {
    props.onClose();
    if(props.onSubmit) {
      props.onSubmit();
    }
  }
  return (
    <div className="ui-popup">
      <div className="popup">
        <div className="popup-header">
          {title}

          <button type="button" onClick={() => props.onClose()}></button>
        </div>

        <div className="popup-content">
          {children}
        </div>

        <div className="popup-footer">
          <div className="popup-footer-btns">
            <Button label={cancelButtonLabel} onClick={() => props.onClose()} />
            <Button label={submitButtonLabel} primary onClick={() => onSubmit()}/>
          </div>
        </div>
      </div>
    </div>
  )
}