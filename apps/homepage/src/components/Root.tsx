import { Outlet } from 'react-router-dom';
import '../styles/common.css';
import '../styles/main.css';
import '../styles/reset.css';
import Header from './Header';


/**
 * Primary UI component for user interaction
 */
export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;