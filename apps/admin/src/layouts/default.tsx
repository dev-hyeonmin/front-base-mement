import { Outlet } from 'react-router-dom';
import Header from './header';

/**
 * Primary UI component for user interaction
 */
export const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Default;