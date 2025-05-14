import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { useThemeMode } from "./hooks/useThemeMode";

import { DashboardLayout } from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import HomePaciente from "./pages/HomePaciente";
import DoctorAppointments from "./pages/DoctorAppointments";
import NotFound from "./pages/NotFound";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const { darkMode } = useThemeMode();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<DashboardLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/homepaciente" element={<HomePaciente />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/turnos-doctor" element={<DoctorAppointments />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
