import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Specialty } from "../pages/Admin/Specialty";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { Doctor } from "../pages/Admin/Doctor";
import { Patient } from "../pages/Admin/Patient";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { RegisterPatientPage } from "../features/auth/pages/RegisterPage";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
                <Route path="/registro" element={<PublicRoutes><RegisterPatientPage /></PublicRoutes>} />

                {/* Admin Routes */}
                <Route path="/" element={<PrivateRoute><DashboardAdmin /></PrivateRoute>} />
                <Route path="/administrador/especialidades" element={<Specialty />} />
                <Route path="/administrador/pacientes" element={<Patient />} />
                <Route path="/administrador/doctores" element={<Doctor />} />

                {/* Doctor Routes */}
                {/* <Route path="/doctor/pacientes" element={<Patient />} />
                <Route path="/perfil-doctor" element={<DoctorProfile />} /> */}
            </Routes>
        </BrowserRouter>
    );
};