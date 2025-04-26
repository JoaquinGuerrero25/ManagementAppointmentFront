import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};