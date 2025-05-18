import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import HomePaciente from "./pages/HomePaciente";
import DoctorAppointments from "./pages/DoctorAppointments";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ThemeModeProvider } from "./context/ThemeProvider";
import { AppRoutes } from "./router/AppRoutes";

function App() {

  return (
    <ThemeModeProvider>
      <AppRoutes />
      {/* <CssBaseline />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<DashboardLayout />}>
            <Route path="/homepaciente" element={<HomePaciente />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/turnos-doctor" element={<DoctorAppointments />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router> */}
    </ThemeModeProvider>
  );
}

export default App;
