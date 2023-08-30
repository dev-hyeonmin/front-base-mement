import { Location, Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Header from './Header';
import '../i18n';
import '../styles/reset.css';

export default function Root() {
  // setting dynamic react helmet name
  // const location: Location = useLocation();
  // const [pathName, setPathName] = useState('');
  // useEffect(() => {
  //   if (location.pathname) {
  //     const paths = location.pathname.split('/');
  //
  //     if (paths.length > 1) {
  //       setPathName(() => paths[1]);
  //     }
  //   }
  // });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mement</title>
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
}
