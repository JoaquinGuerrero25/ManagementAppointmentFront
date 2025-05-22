import { AppRoutes } from './router/AppRoutes';
import { ThemeModeProvider } from './context/ThemeProvider';
import '@fontsource/inter';

function App() {
  return (
    <ThemeModeProvider>
      <AppRoutes />
    </ThemeModeProvider>
  )
}

export default App