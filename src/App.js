import './App.css';
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
    <ThemeProvider them={theme}>
      <div className="App">
      
      </div>
    </ThemeProvider>
  );
}

export default App;
