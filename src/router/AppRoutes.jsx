import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { RegisterPatientPage } from "../features/auth/pages/RegisterPage";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardAdminPage } from "../features/dashboard/pages/DashboardAdminPage";
import { SpecialtyPage } from "../features/specialty/pages/SpecialtyPage";
import { DoctorAdminPage } from "../features/doctors/pages/DoctorAdminPage";
import { PatientAdminPage } from "../features/patient/pages/PatientAdminPage";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
                <Route path="/registro" element={<PublicRoutes><RegisterPatientPage /> </PublicRoutes>} />

                {/* Admin Routes */}
                <Route path="/" element={<PrivateRoute allowedRoles={["Admin"]}><DashboardAdminPage /></PrivateRoute>} />
                <Route path="/administrador/pacientes" element={<PrivateRoute allowedRoles={["Admin"]}><PatientAdminPage /></PrivateRoute>} />
                <Route path="/administrador/doctores" element={<PrivateRoute allowedRoles={["Admin"]}><DoctorAdminPage /></PrivateRoute>} />
                <Route path="/administrador/especialidades" element={<PrivateRoute allowedRoles={["Admin"]}><SpecialtyPage /></PrivateRoute>} />

                {/* Doctor Routes */}
                {/* <Route path="/doctor/pacientes" element={<Patient />} />
                <Route path="/perfil-doctor" element={<DoctorProfile />} /> */}
            </Routes>
        </BrowserRouter>
    );
};