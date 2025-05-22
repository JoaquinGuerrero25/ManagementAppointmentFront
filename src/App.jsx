import { ThemeModeProvider } from "./context/ThemeProvider";
import { AppRoutes } from "./router/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <ThemeModeProvider>
      <AppRoutes />
    </ThemeModeProvider>
  );
}

export default App