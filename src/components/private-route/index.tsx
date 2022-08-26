import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Amplify from '../../services/Amplify';

const PrivateRoute: React.FC = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { mutate } = useMutation(() => Amplify.verifyUser(), {
    onError: (error) => {
      if (!location.pathname.includes('/auth')) {
        navigator('/auth/login');
      }
    },
  });

  useEffect(() => {
    mutate();
  }, [location.pathname]);
  return (
    <Outlet />
  );
};

export default PrivateRoute;
