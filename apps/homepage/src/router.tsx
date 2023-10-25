import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import IntroIndex from './pages/intro';
import Guide from './pages/intro/Guide';
import Intro from './pages/intro/Intro';
import Notice from './pages/intro/Notice';
import Staff from './pages/intro/Staff';

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
        element: <IntroIndex />,
        children: [
          {
            path: "",
            element: <Intro />,
          },
          {
            path: "staff",
            element: <Staff />,
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
