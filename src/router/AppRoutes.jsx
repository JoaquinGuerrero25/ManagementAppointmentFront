import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Doctor } from "../pages/Admin/Doctor";
import { Patient } from "../pages/Admin/Patient";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { RegisterPatientPage } from "../features/auth/pages/RegisterPage";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardAdminPage } from "../features/dashboard/pages/DashboardAdminPage";
import { SpecialtyPage } from "../features/specialty/pages/SpecialtyPage";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
                <Route path="/registro" element={<PublicRoutes><RegisterPatientPage /> </PublicRoutes>} />

                {/* Admin Routes */}
                <Route path="/" element={<PrivateRoute allowedRoles={["All"]}><DashboardAdminPage /></PrivateRoute>} />
                <Route path="/administrador/especialidades" element={<PrivateRoute allowedRoles={["Admin"]}><SpecialtyPage /></PrivateRoute>} />
                <Route path="/administrador/pacientes" element={<Patient />} />
                <Route path="/administrador/doctores" element={<Doctor />} />

                {/* Doctor Routes */}
                {/* <Route path="/doctor/pacientes" element={<Patient />} />
                <Route path="/perfil-doctor" element={<DoctorProfile />} /> */}
            </Routes>
        </BrowserRouter>
    );
};