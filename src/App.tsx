import { Grid, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/app-bar';
import Home from './components/home';
import theme from './static/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} margin={{ xs: 0.1, sm: 0.4, md: 0.6 }} sx={{ width: "98% !important", boxSizing: "border-box" }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
