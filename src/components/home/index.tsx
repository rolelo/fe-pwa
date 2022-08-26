import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import instance from '../../utils/instance';

const Home = () => {
  useEffect(() => {
    instance.get('/').then((d) => {
      console.log(d);
    });
  });
  return (
    <Typography variant="h2">Hello World</Typography>

  );
};

export default Home;
