import React from 'react';
import styled from '@emotion/styled';
import {
  Button, Divider, Fade, TextField, Typography,
} from '@mui/material';
import GoogleButton from 'react-google-button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CustomForm = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '2rem',
  '> hr': {
    width: '100%',
  },
  '& .contentHolder': {
    textAlign: 'center',
    '& a': {
      fontSize: '1.6rem',
      textDecoration: 'none',
      marginBottom: '8px',
    },
  },
});

const Login: React.FC = () => {
  const { handleSubmit, register } = useForm();

  return (
    <Fade in timeout={600}>
      <CustomForm onSubmit={handleSubmit((data) => console.log(data))}>
        <h1>Log In</h1>
        <TextField label="Username" variant="filled" fullWidth {...register('username')} />
        <TextField label="Password" variant="filled" fullWidth {...register('password')} />
        <Button variant="contained" type="submit" fullWidth size="large">Login</Button>
        <Divider />
        <div className="contentHolder">
          <Typography variant="body1">Dont have an account?</Typography>
          <Link to="/auth/signup">Sign Up</Link>
        </div>
        <Typography variant="body1">Or</Typography>
        <GoogleButton />
      </CustomForm>
    </Fade>
  );
};

export default Login;
