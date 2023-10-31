import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: '/home',
        element: <Home />,
      }
    ],
  },
]);

export default router;
