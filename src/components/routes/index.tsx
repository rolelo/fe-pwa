import React from 'react';
import { useRoutes } from 'react-router-dom';
import Auth from '../auth';
import Login from '../login';
import SignUp from '../signup';
import Confirm from '../confirm';
import PrivateRoute from '../private-route';
import Home from '../home';
import DashboardLayout from '../dashboard/layout';
import Organisation from '../organisation';

const Routes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <PrivateRoute />,
      children: [{
        path: 'auth',
        element: <Auth />,
        children: [{
          path: 'login',
          element: <Login />,
        }, {
          path: 'signup',
          element: <SignUp />,
        }, {
          path: 'confirm',
          element: <Confirm />,
        }],
      }, {
        path: '/',
        element: <DashboardLayout />,
        children: [{
          path: 'dashboard',
          index: true,
          element: <Home />,
        }, {
          path: 'organisation',
          element: <Organisation />,
        }],
      }],
    },
  ]);
  return element;
};

export default Routes;
