import styled from '@emotion/styled';
import { Button, Divider, Fade, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const CustomForm = styled('form')({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: '2rem',
  '> hr': {
    width: '100%',
  },
  '& .contentHolder': {
    textAlign: 'center',
    '& a': {
      fontSize: '1.6rem',
      textDecoration: "none",
      marginBottom: '8px',
    }
  }
})

const SignUp = () => {
  const { handleSubmit, register } = useForm();
  return (
    <Fade in={true} timeout={600}>
      <CustomForm onSubmit={handleSubmit((data) => console.log(data))}>
        <h1>Sign Up</h1>
        <TextField size="small" label="Name" variant="filled" fullWidth {...register('name')} />
        <TextField size="small" label="Email" variant="filled" fullWidth {...register('email')} />
        <TextField size="small" label="Password" variant="filled" fullWidth {...register('password')} type='password'  />
        <TextField size="small" label="Confirm Password" variant="filled" fullWidth {...register('password')} type='password' />
        <Button variant="contained" type='submit' fullWidth size='large'>Register</Button>
        <Divider />
        <div className="contentHolder">
          <Typography variant='body1'>Don't have an account?</Typography>
          <Link to='/auth/login'>Log In</Link>
        </div>
        <Typography variant='body1'>Or</Typography>
        <GoogleButton />
      </CustomForm>
    </Fade>
  )
}

export default SignUp