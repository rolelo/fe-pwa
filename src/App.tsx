import { ThemeProvider } from '@mui/material';
import './App.css';
import AppBar from './components/app-bar';
import theme from './static/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
    </ThemeProvider>
  );
}

export default App;
