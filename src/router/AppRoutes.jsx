import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Specialty } from "../pages/Admin/Specialty";
import { Patient } from "../pages/Doctor/Patient";
import { SpecialtyCreate } from "../pages/Admin/SpecialtyCreate";
// import { Dashboard } from "../pages/Admin/Dashboard";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />

                {/* Admin Routes */}
                {/* <Route path="/administrador/panel" element={<Dashboard />} /> */}
                <Route path="/administrador/especialidades" element={<Specialty />} />
                <Route path="/administrador/especialidades/crear" element={<SpecialtyCreate />} />

                {/* Doctor Routes */}
                <Route path="/doctor/pacientes" element={<Patient />} />
            </Routes>
        </BrowserRouter>
    );
};