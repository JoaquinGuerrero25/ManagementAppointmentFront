import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/registro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};