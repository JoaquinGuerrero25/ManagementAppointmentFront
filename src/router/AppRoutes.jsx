import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";
import { Specialty } from "../pages/Admin/Specialty/Specialty";
import { SpecialtyFormPage } from "../pages/Admin/Specialty/SpecialtyFormPage";
import { Patient } from "../pages/Doctor/Patient";
import { Dashboard } from "../pages/Admin/Dashboard";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Auth Routes */}
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />

                {/* Admin Routes */}
                {/* el dashboard siempre mostrar en /, ver manera que muestre un dashboard dependiendo el rol */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/administrador/especialidades" element={<Specialty />} />
                <Route path="/administrador/especialidades/crear" element={<SpecialtyFormPage />} />
                <Route path="/administrador/especialidades/editar/:id" element={<SpecialtyFormPage />} />


                {/* Doctor Routes */}
                <Route path="/doctor/pacientes" element={<Patient />} />
            </Routes>
        </BrowserRouter>
    );
};