import { Typography } from '@mui/material';
import React from 'react';
import instance from '../../utils/instance';

const Home = () => {
  React.useEffect(() => {
    instance.get('/').then((d) => {
      console.log(d, 'ssss');
    });
  });
  return (
    <Typography variant="h2">Hello World</Typography>
  );
};

export default Home;
