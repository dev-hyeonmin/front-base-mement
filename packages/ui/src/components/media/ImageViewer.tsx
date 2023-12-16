import { useEffect, useState } from 'react';
import { Box, IconButton, Tooltip } from '..';
import deleteIcon from '../../../public/delete.png';
import exchangeIcon from '../../../public/exchange.png';
import fileUploadImage from '../../../public/upload_file.png';
import { CommonProps } from "../common";

export interface ImageViewerProps extends CommonProps {
  width?: string;
  height?: string;
  status?: 'error' | 'warning' | 'loading';
  deafultImageUrl?: string;
  imageFile?: any;
  onAddImage?: () => void;
  onRemoveImage?: () => void;
}

export const ImageViewer = ({
  className = [],
  width,
  height,
  status,
  deafultImageUrl,
  imageFile,
  onAddImage,
  onRemoveImage
}: ImageViewerProps) => {
  const [imageLink, setImageLink] = useState<string | undefined>(deafultImageUrl);
  const removeImage = () => {
    setImageLink('');

    if (onRemoveImage) {
      onRemoveImage();
    }
  };

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const blob = new Blob([file], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      setImageLink(url);
    } 
  }, [imageFile]);

  return (
    <div
      className={["ui-imageviewer", `ui-imageviewer--${status}`, imageLink && `ui-imageviewer--full`, ...className].join(' ')}
      style={{
        width: width,
        height: height,
        backgroundImage: `url(${imageLink})`
      }}>

      {!imageLink &&
        <Tooltip content='Add Image' textAlign='center' placement='top'>
          <button className='ui-imageviewer__add-btn' onClick={onAddImage}>
            <img src={fileUploadImage} />
          </button>
        </Tooltip>
      }

      {(imageLink && (onAddImage || onRemoveImage)) &&
        <div className='ui-imageviewer__overlay'>
          <Box width='100%' height='100%' align='center' verticalAlign='middle' gap='10px'>
            {onAddImage &&
              <IconButton priority='secondary' backgroundColor='transparent' onClick={onAddImage}>
                <img src={exchangeIcon} />
              </IconButton>
            }

            {onRemoveImage &&
              <IconButton priority='secondary' backgroundColor='transparent' onClick={() => removeImage()}>
                <img src={deleteIcon} />
              </IconButton>
            }
          </Box>
        </div>
      }
    </div>
  )
}