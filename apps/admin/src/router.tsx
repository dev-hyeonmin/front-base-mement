import { createBrowserRouter } from 'react-router-dom';
import Default from './layouts/default';
import Account from './pages/Account';
import Information from './pages/Information';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Main from './pages/Main';
import Meta from './pages/Meta';
import NotFound from './pages/NotFound';
import Events from './pages/event';

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
        path: '/',
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
        path: '/intro',
        element: <Intro />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/account',
        element: <Account />,
      }
    ],
  },
]);