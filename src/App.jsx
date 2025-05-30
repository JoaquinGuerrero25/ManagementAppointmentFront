import { useSelector } from "react-redux";
import ErrorSnackbar from "./components/ErrorSnackbar";
import { ThemeModeProvider } from "./context/ThemeProvider";
import { AppRoutes } from "./router/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <ThemeModeProvider>
      <AppRoutes />
      <ErrorSnackbar />
    </ThemeModeProvider>
  );
}

export default App;
