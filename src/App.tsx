import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/app-bar';
import Home from './components/home';
import theme from './static/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
