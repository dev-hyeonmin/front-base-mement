import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Branch from './pages/Branch';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Branch />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />
  },
]);


export default router;
