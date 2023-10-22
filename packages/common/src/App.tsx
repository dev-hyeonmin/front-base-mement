import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';
import { Modal } from './components/Modal';
import { UploadFile } from './components/UploadFile';
import './components/style.css';
import './style.css';

function App() {
  return (
    <>
      <div className='canvas'>
        <div className='canvas-item'>
          <Button label='button' />
        </div>

        <div className='canvas-item'>
          <Button label='button' primary />
        </div>

        <div className='canvas-item'>
          <Button label='button' disabled />
        </div>

        <div className='canvas-item'>
          <Button label='button' warning />
        </div>

        <div className='canvas-item'>
          <Input placeholder='example@email.com' />
        </div>

        <div className='canvas-item'>
          <Input value='read-only' readonly />
        </div>

        <div className='canvas-item'>
          <Checkbox id="checkbox" />
        </div>

      </div>

      <div className='canvas-item'>
        <UploadFile id="uploadfile" label='Upload Image' discription='Only JPEG, GIF and PNG files up to 5 MB are supported.' />
      </div>
      <div className='canvas-item'>
        <Modal />
      </div>
    </>
  )
}

export default App