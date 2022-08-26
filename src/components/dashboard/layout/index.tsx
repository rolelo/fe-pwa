import styled from '@emotion/styled';
import { Fade } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../navigation';

const Container = styled('div')({
  padding: '2rem',
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100vh',
  height: '1px',
  boxSizing: 'border-box',
  '& > .wrapper': {
    padding: '2rem',
    boxSizing: 'border-box',
  },
});

const DashboardLayout: React.FC = () => {
  const x = 2;
  return (
    <Fade in timeout={600}>
      <Container>
        <Navigation />
        <div className="wrapper">
          <Outlet />
        </div>
      </Container>
    </Fade>
  );
};

export default DashboardLayout;
