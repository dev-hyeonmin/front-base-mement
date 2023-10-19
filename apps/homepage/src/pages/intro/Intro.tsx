import { Outlet } from 'react-router-dom';
import IntroMenu from '../../components/IntroMenu';

export default function Intro() {
  return (
    <div className='wrapper'>
      <IntroMenu />
      <Outlet />
    </div>
  );
}
