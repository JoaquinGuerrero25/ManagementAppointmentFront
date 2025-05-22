import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Specialty } from "../pages/Admin/Specialty/Specialty";
import { SpecialtyFormPage } from "../pages/Admin/Specialty/SpecialtyFormPage";
import { Patient } from "../pages/Doctor/Patient";
import { DoctorProfile } from "../pages/DoctorProfile";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />

                {/* Admin Routes */}
                <Route path="/administrador/especialidades" element={<Specialty />} />
                <Route path="/administrador/especialidades/crear" element={<SpecialtyFormPage />} />
                <Route path="/administrador/especialidades/editar/:id" element={<SpecialtyFormPage />} />


                {/* Doctor Routes */}
                <Route path="/doctor/pacientes" element={<Patient />} />
                <Route path="/doctor/perfil" element={<DoctorProfile />} />
            </Routes>
        </BrowserRouter>
    );
};