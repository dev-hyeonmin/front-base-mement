import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import '../styles/common.css';
import '../styles/main.css';
import '../styles/reset.css';
import Header from './Header';

export default function Root() {
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
