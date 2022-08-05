import { Grid, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography variant="h1">Accelerate your career, <br /> get the job that you deserve</Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
      </Grid>
    </>
  )
}

export default Home;
