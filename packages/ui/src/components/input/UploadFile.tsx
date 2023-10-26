
import uploadFileImage from '../../images/upload_file.png';

export interface UploadFileProps {
  /**
   * input file id
   */
  id: string;
  /**
   * Uploadfile contents
   */
  label?: string;
  /**
   * Description of file
   */
  description?: string;
  /**
   * The maximum file size for upload.
   */
  maxSize?: string;
}
export const UploadFile = ({
  id,
  label,
  description,
  ...props
}: UploadFileProps) => {
  return (
    <div className="ui-upload">
      <label htmlFor={id}>

        <img src={uploadFileImage} />
        {label &&
          <div className="upload-label">{label}</div>
        }
        {description &&
          <div className="upload-description">{description}</div>
        }

        {/* <div className="ui-file--warning"></div> */}
      </label>

      <input
        id={id}
        type='file'
        className={['ui-file'].join(' ')} />
    </div>
  )
}