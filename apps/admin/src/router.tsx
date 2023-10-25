import { createBrowserRouter } from 'react-router-dom';
import Default from './layouts/default';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      }
    ],
  },
]);

export default router;
