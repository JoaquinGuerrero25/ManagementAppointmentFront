import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";
import { Specialty } from "../pages/Admin/Specialty";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { Doctor } from "../pages/Admin/Doctor";

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
                {/* <Route path="/doctor/pacientes" element={<Patient />} />
                <Route path="/perfil-doctor" element={<DoctorProfile />} /> */}
            </Routes>
        </BrowserRouter>
    );
};