import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from '@mui/material';

const CurveContainer = styled.div`
  z-index: -1;
  position: relative;
  background-color: #121212;
  width: 100%;
  top: 0;
  left: 0;
  & svg {
    background-color: white;
    position: relative;
    top: 4px;
  }
`;

const Accelerate: React.FC = () => {
  return (
    <Grid container xs={12} rowGap={2}>
      <CurveContainer>
        <Grid item xs={12} md={8} padding={{ xs: 4, sm: 6, md: 8, lg: 30 }}
          paddingTop={{ lg: 16 }}
          paddingBottom={{ lg: 16 }}>
          <Typography variant="h1" color="white">Accelerate your career, <br /> get the job that <i><b>you</b></i> deserve</Typography>
          <Box sx={{
            marginTop: 4, display: "flex", flexGrow: "1", gap: {
              xs: 1,
              sm: 2,
            }, flexDirection: {
              xs: "column",
              sm: "row"
            }
          }}>
            <Button variant='contained' sx={{ fontSize: { sm: '1.1rem' } }}>Get Started</Button>
            <Button variant='contained' color="secondary" sx={{ fontSize: { sm: '1.1rem' } }}>Browse Jobs</Button>
            <Button variant='outlined' sx={{ fontSize: { sm: '1.1rem' } }}>How it works</Button>
          </Box>
        </Grid>
      </CurveContainer>
    </Grid >
  )
}

export default Accelerate;
