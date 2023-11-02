
import { RouterProvider } from 'react-router-dom';
import { loggedInRouter, loggedOutRouter } from './router.tsx';

function App() {
  const token = true; //getToken();
  // we need token validation

  return (
    <RouterProvider router={token ? loggedInRouter : loggedOutRouter} />
  )
}

export default App
