import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from '@mui/material';

const CurveContainer = styled.div`
  z-index: -1;
  position: absolute;
  height: 50vh;
  background-color: #121212;
  width: 100%;
  top: 0;
  left: 0;
  & svg {
    position: absolute;
    bottom: 2px;
    transform: translateY(100%);
  }
`;

const IconContainer = styled.div`
  & i {
    opacity: 0;
    font-size: 5rem;
    position: absolute;
    right: 0px;
    width: 48px;
    height: 48px;
    transform: translateX(-15vw);
    color: white;
    animation: iconScroll 6s infinite;

    @media(max-width: 600px) {
      font-size: 3rem;
    }
  }
`;

const Home = () => {
  return (
    <Grid item xs={12} rowGap={2}>
      <IconContainer>
        <i className="devicon-react-plain" style={{ animationDelay: '1s' }}></i>
        <i className="devicon-angularjs-plain" style={{ animationDelay: '2s' }}></i>
        <i className="devicon-vuejs-plain" style={{ animationDelay: '3s' }}></i>
        <i className="devicon-graphql-plain" style={{ animationDelay: '4s' }}></i>
        <i className="devicon-java-plain" style={{ animationDelay: '5s' }}></i>
        <i className="devicon-php-plain" style={{ animationDelay: '6s' }}></i>
      </IconContainer>
      <Grid item xs={12} md={8} padding={{ xs: 0, sm: 4, md: 8 }}>
        <Typography variant="h1" color="white">Accelerate your career, <br /> get the job that <i><b>you</b></i> deserve</Typography>
        <Box sx={{ marginTop: 4, display: "flex", flexGrow: "1", gap: 2 }}>
          <Button variant='contained' sx={{ fontSize: { sm: '1.1rem' } }}>Get Started</Button>
          <Button variant='outlined' sx={{ fontSize: { sm: '1.1rem' } }}>How it works</Button>
        </Box>
      </Grid>
      <CurveContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#121212" fill-opacity="1" d="M0,288L15,261.3C30,235,60,181,90,181.3C120,181,150,235,180,261.3C210,288,240,288,270,266.7C300,245,330,203,360,186.7C390,171,420,181,450,176C480,171,510,149,540,144C570,139,600,149,630,165.3C660,181,690,203,720,181.3C750,160,780,96,810,101.3C840,107,870,181,900,218.7C930,256,960,256,990,224C1020,192,1050,128,1080,117.3C1110,107,1140,149,1170,176C1200,203,1230,213,1260,213.3C1290,213,1320,203,1350,170.7C1380,139,1410,85,1425,58.7L1440,32L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path>
        </svg>
      </CurveContainer>
    </Grid>
  )
}

export default Home;
