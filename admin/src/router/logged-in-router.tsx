import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

const loggedInRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default loggedInRouter;
