import { Box, Grid, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/app-bar';
import Home from './components/home';
import theme from './static/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Box sx={{ flexGrow: 1, padding: { xs: "0 30px", sm: "0 48px" } }}>
        <Grid container spacing={2}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
