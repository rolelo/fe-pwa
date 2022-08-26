import styled from '@emotion/styled';
import React from 'react';
import { ExitToAppOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import theme from '../../static/theme';
import Logo from '../../assets/logo.png';
import Amplify from '../../services/Amplify';

const Container = styled('div')({
  borderRadius: '2rem',
  backgroundColor: theme.palette.primary.dark,
  padding: '2rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  '& > div:first-of-type': {
    flex: 0.1,
    '& > img': {
      width: '3rem',
    },
  },
  '& > .icons-list': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& button': {
      padding: 0,
    },
    '& svg': {
      fontSize: '2.8rem',
      color: 'white',
    },
  },
});

const Navigation: React.FC = () => {
  const navigator = useNavigate();
  const logoutMutation = useMutation(() => Amplify.signOut(), {
    onSuccess: () => {
      toast.success('Logged out!');
      navigator('/auth/login');
    },
    onError: () => {
      toast.error('Error signing you out');
    },
  });
  return (
    <Container className="box-shadow-darker">
      <div>
        <img src={Logo} title="Rolelo" alt="Rolelo" />
      </div>
      <div className="icons-list">
        <Tooltip title="Sign out">
          <IconButton onClick={() => logoutMutation.mutate()} disabled={logoutMutation.isLoading}>
            <ExitToAppOutlined />
          </IconButton>
        </Tooltip>
      </div>
    </Container>

  );
};

export default Navigation;
