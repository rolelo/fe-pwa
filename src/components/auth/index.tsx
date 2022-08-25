import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import AppLogo from '../../assets/logo.png';

const Container = styled('div')({
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-4rem)',
});
const Wrapper = styled('div')({
  width: '35rem',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80%',
  rowGap: '0.5rem',
  alignItems: 'center',
  '> img': {
    width: '4rem',
  },
  '> hr': {
    width: '100%',
  },
});

type Props = PropsWithChildren;

const Auth: React.FC<Props> = ({ children }) => (
  <Container>
    <Wrapper>
      <img src={AppLogo} alt="Rolelo" title="Rolelo" />
      <Outlet />
    </Wrapper>
  </Container>
);

export default Auth;
