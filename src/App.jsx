import { createTheme, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import { AppRoutes } from './router/AppRoutes';
import { useThemeMode } from './hooks/useThemeMode';

function App() {
  const { darkMode, toggleMode } = useThemeMode();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch checked={darkMode} onChange={toggleMode} />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
