
import { ChangeEvent, ReactNode, useRef } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

export interface FileUploadProps {
  value: string;
  children: (props: { openFileUploadDialog: () => void, deleteFile: () => void }) => ReactNode;
  maxSize?: string;
  registerOption?: RegisterOptions;
}
export const FileUpload = ({
  children,
  value,
  registerOption
}: FileUploadProps) => {
  const { register, setValue, formState: { errors } } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, onChange, ...rest } = register(value, registerOption);

  const changeFile = (event: ChangeEvent<HTMLInputElement>) => {
    return event.target.files?.[0];
  }

  const deleteFile = () => {
    setValue(value, '');
  }

  const openFileUploadDialog = () => {
    inputRef.current?.click();    
  };

  return (
    <div className="ui-fileupload">
      {children({ openFileUploadDialog, deleteFile })}

      <input
        type='file'
        className="ui-fileupload__input"
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        onChange={(e) => {
          onChange(e);
          changeFile(e);
        }} />
    </div>
  )
}