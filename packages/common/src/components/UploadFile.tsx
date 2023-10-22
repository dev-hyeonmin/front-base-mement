
import uploadFileImage from '../images/upload_file.png';

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
   * Discription of file
   */
  discription?: string;
  /**
   * The maximum file size for upload.
   */
  maxSize?: string;
}
export const UploadFile = ({
  id,
  label,
  discription,
  ...props
}: UploadFileProps) => {
  return (
    <div className="storybook-upload">
      <label htmlFor={id}>

        <img src={uploadFileImage} />
        {label &&
          <div className="upload-label">{label}</div>
        }
        {discription &&
          <div className="upload-discription">{discription}</div>
        }

        {/* <div className="storybook-file--warning"></div> */}
      </label>

      <input
        id={id}
        type='file'
        className={['storybook-file'].join(' ')} />
    </div>
  )
}