import { createBrowserRouter } from 'react-router-dom';
import Intro from './components/Intro';
import Root from './components/Root';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Events from './pages/events/Events';
import Guide from './pages/intro/Guide';
import Notice from './pages/intro/Notice';
import Product from './pages/products/Product';
import Products from './pages/products/Products';

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
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: "events/:eventId",
        element: <Events />,
      },
    ],
  },
]);

export default router;
