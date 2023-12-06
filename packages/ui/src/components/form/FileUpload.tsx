
import fileUploadImage from '../../../public/upload_file.png';

export interface FileUploadProps{
  id: string;
  label?: string;
  description?: string;
  maxSize?: string;
}
export const FileUpload = ({
  id,
  label,
  description,
}: FileUploadProps) => {
  return (
    <div className="ui-upload">
      <label htmlFor={id}>

        <img src={fileUploadImage} />
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