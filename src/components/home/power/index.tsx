import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

import CheckList from "../../../assets/checklist.png";

const Power = () => {
  return (
    <Grid container xs={12} rowGap={2} padding={{ sx: 2, sm: 3, md: 4 }}>
      <Grid item md={3}></Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{
          boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0)',
          borderRadius: '5px',
          border: '2px solid black',
          display: "flex",
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          gap: {
            xs: 2,
            sm: 4,
          },
          padding: {
            xs: 2,
            sm: 3,
          },
        }}>
          <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: 2,
              sm: 3,
            },
            marginTop: {
              sm: 2,
            },
          }}>
            <div>
              <Typography variant="h4">Decide what you want</Typography>
              <Typography variant="h2">Find a job that is tailored to your needs</Typography>
            </div>
            <Typography variant="body1">
              It's time to give back power to the job seekers, not the job posters. Configure the job you desire, and get connected
              with companies that are a perfect match.
            </Typography>
            <Button variant='contained' sx={{ fontSize: { sm: '1.1rem' }, width: "fit-content" }} color="secondary">Find My Ideal Job Now</Button>
          </Box>
          <Box sx={{
            flex: 1,
            overflow: "hidden",
          }}>
            <Box sx={{
              width: { xs: "50%", sm: "100%", display: "inline-block" }, position: "relative", right: "-100%", transform: {
                xs: "translate(-82%, 14%)",
                sm: "translate(-46%, 24%)"
              }
            }}>
              <img src={CheckList} alt="checklist" style={{ width: "100%", maxWidth: "250px" }} />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid md={3}></Grid>
    </Grid >
  )
}

export default Power