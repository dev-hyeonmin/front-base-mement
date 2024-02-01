
import { RouterProvider } from 'react-router-dom';
import { loggedInRouter, loggedOutRouter } from './router.tsx';
import { getToken } from './util.ts';

function App() {
  let token = getToken();
  // we need token validation
  return (
    <RouterProvider router={token ? loggedInRouter : loggedOutRouter} />
  )
}

export default App
