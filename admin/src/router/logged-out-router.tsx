import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

const loggedOutRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
]);

export default loggedOutRouter;