import styled from '@emotion/styled';
import { Fade, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '../../../hooks';
import Navigation from '../../navigation';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '1px',
  boxSizing: 'border-box',
  '& > .wrapper': {
    padding: '2rem',
    boxSizing: 'border-box',
  },
});

const DashboardLayout: React.FC = () => {
  const userInfo = useUserInfo();
  return (
    <Fade in timeout={600}>
      <Container>
        <Navigation />
        <div className="wrapper">
          <Typography variant="h1" style={{ margin: '0', fontWeight: '500', fontSize: '3.5rem' }}>
            Welcome back,
            {' '}
            {userInfo?.name}
          </Typography>
          <Outlet />
        </div>
      </Container>
    </Fade>
  );
};

export default DashboardLayout;
