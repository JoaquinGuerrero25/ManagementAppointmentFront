import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { RegisterPatientPage } from "../features/auth/pages/RegisterPage";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardAdminPage } from "../features/dashboard/pages/DashboardAdminPage";
import { SpecialtyPage } from "../features/specialty/pages/SpecialtyPage";
import { DoctorAdminPage } from "../features/doctors/pages/DoctorAdminPage";
import { PatientAdminPage } from "../features/patient/pages/PatientAdminPage";
import { DashboardDoctorPage } from "../features/dashboard/pages/DashboardDoctorPage";
import { useSelector } from "react-redux";
import { DoctorProfile } from "../pages/Doctor/DoctorProfile";
import { AppointmentPage } from "../features/appointments/pages/AppointmentPage";
import { MedicalHistoryPatientPage } from "../features/medicalHistory/pages/MedicalHistoryPatientPage";
import { ProfilePage } from "../features/profile/pages/ProfilePage";
import { ForgotPasswordPage } from "../features/auth/pages/ForgotPasswordPage";
import { ResetPasswordPage } from "../features/auth/pages/ResetPasswordPage";
import { DashboardPatientPage } from "../features/dashboard/pages/DashboardPatientPage";
import { AvailabilityDoctorPage } from "../features/availability/pages/AvailabilityDoctorPage";

export const AppRoutes = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <BrowserRouter>
            <Routes>
                {/* Dashboard Routes */}
                {
                    user?.role === "Admin" ? (
                        <Route path="/" element={<PrivateRoute allowedRoles={["Admin"]}><DashboardAdminPage /></PrivateRoute>} />
                    ) : user?.role === "Doctor" ? (
                        <Route path="/" element={<PrivateRoute allowedRoles={["Doctor"]}><DashboardDoctorPage /></PrivateRoute>} />
                    ) : (
                        <Route path="/" element={<PrivateRoute allowedRoles={["Patient"]}><DashboardPatientPage /></PrivateRoute>} />
                    )
                }

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
                <Route path="/registro" element={<PublicRoutes><RegisterPatientPage /> </PublicRoutes>} />
                <Route path="/recuperar-contraseña" element={<PublicRoutes><ForgotPasswordPage /> </PublicRoutes>} />
                <Route path="/reset-password" element={<PublicRoutes><ResetPasswordPage /></PublicRoutes>} />
                
                {/* Admin Routes */}
                <Route path="/administrador/pacientes" element={<PrivateRoute allowedRoles={["Admin"]}><PatientAdminPage /></PrivateRoute>} />
                <Route path="/administrador/doctores" element={<PrivateRoute allowedRoles={["Admin"]}><DoctorAdminPage /></PrivateRoute>} />
                <Route path="/administrador/especialidades" element={<PrivateRoute allowedRoles={["Admin"]}><SpecialtyPage /></PrivateRoute>} />

                {/* Doctor Routes */}
                <Route path="/doctor/perfil" element={<DoctorProfile />} />
                <Route path="/doctor/disponibilidad" element={<PrivateRoute allowedRoles={["Doctor"]}><AvailabilityDoctorPage /></PrivateRoute>} />

                {/* Patient Routes */}
                <Route path="/paciente/solicitar-turno" element={<PrivateRoute allowedRoles={["Patient"]}><AppointmentPage /></PrivateRoute>} />
                <Route path="/paciente/historial-medico" element={<PrivateRoute allowedRoles={["Patient"]}><MedicalHistoryPatientPage /></PrivateRoute>} />

                {/* General Routes */}
                <Route path="/perfil" element={<PrivateRoute allowedRoles={['All']}><ProfilePage /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
};