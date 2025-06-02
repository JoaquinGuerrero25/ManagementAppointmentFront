import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";
import { Specialty } from "../pages/Admin/Specialty";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { Doctor } from "../pages/Admin/Doctor";
import { DoctorProfile } from "../pages/Doctor/DoctorProfile";
import {Appointments} from "../pages/Patient/Appointments";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />

                {/* Admin Routes */}
                <Route path="/" element={<DashboardAdmin />} />
                <Route path="/administrador/especialidades" element={<Specialty />} />
                <Route path="/administrador/doctores" element={<Doctor />} />

                {/* Doctor Routes */}
                <Route path="/doctor/perfil" element={<DoctorProfile />} />

                {/* Patient Route */}
                <Route path="/paciente/solicitar-turno" element={<Appointments />} /> 

            </Routes>
        </BrowserRouter>
    );
};