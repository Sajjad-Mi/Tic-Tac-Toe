import './App.css';
import Board from './Board'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fcde67',
    },
    secondary: {
      main: '#272626',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Board />
      </div>
    </ThemeProvider>
  );
}

export default App;
