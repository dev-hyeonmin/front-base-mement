import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Guide from './pages/intro/Guide';
import Intro from './pages/intro/Intro';
import Notice from './pages/intro/Notice';

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
        path: "intro",
        element: <Intro />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "staff",
            element: <Home />,
          },
          {
            path: "guid",
            element: <Guide />,
          },
          {
            path: "notice",
            element: <Notice />,
          },
        ]
      }
    ],
  },
]);

export default router;
