import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { DoctorProfile } from "../pages/DoctorProfile";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil-doctor" element={<DoctorProfile />} />
            </Routes>
        </BrowserRouter>
    );
};