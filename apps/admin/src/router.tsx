import { createBrowserRouter } from 'react-router-dom';
import Default from './layouts/default';
import Information from './pages/Information';
import Login from './pages/Login';
import Meta from './pages/Meta';
import NotFound from './pages/NotFound';
import Popup from './pages/Popup';
import Account from './pages/account';
import Branch from './pages/branch';
import ProductDetail from './pages/detail';
import Events from './pages/event';
import Main from './pages/main';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

export const loggedOutRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
]);

export const loggedInRouter = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/information',
        element: <Information />,
      },
      {
        path: '/meta',
        element: <Meta />,
      },
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/popup',
        element: <Popup />,
      },
      {
        path: '/detail/:id',
        element: <ProductDetail />,        
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/',
        element: <Account />,
      },
      {
        path: '/branch',
        element: <Branch />,
      }
    ],
  },
]);