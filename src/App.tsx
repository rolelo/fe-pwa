import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './components/routes';
import theme from './static/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
