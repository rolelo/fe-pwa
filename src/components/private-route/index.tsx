import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Amplify from '../../services/Amplify';

const PrivateRoute: React.FC = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { mutate } = useMutation(() => Amplify.verifyUser(), {
    onError: (error) => {
      if (!location.pathname.includes('/auth')) {
        toast.error(error instanceof Error ? error.message : 'Invalid user');
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
