import { useRoutes } from 'react-router-dom';
import Auth from '../auth';
import Login from '../login';
import SignUp from '../signup';

const Routes = () => {
  const element = useRoutes([
    {
      path: "/auth",
      element: <Auth />,
      children: [{
        path: "login",
        element: <Login />
      }, {
        path: 'signup',
        element: <SignUp />
      }]
    }
  ]);
  return element;
}

export default Routes;
