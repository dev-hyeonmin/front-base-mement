import { createBrowserRouter } from 'react-router-dom';
import Default from './layouts/default';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

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
        path: '/home',
        element: <Home />,
      }
    ],
  },
]);