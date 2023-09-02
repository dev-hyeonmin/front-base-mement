import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Root from './components/Root';
import React from 'react';
import Home from './pages/Home';
import Events from './pages/Events';

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
        element: <Home />,
      },
      {
        path: 'events',
        element: <Events />,
      },
    ],
  },
]);

export default router;
