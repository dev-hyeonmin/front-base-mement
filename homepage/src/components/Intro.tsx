import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import IntroMenu from './IntroMenu';

export default function Intro() {
  return (
    <div className='wrapper'>
      <Helmet>
        <title>mement | intro</title>
      </Helmet>
      
      <IntroMenu />

      <Outlet />
    </div>
  );
}
