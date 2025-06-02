import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, allowedRoles = [] }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    if (!isAuthenticated) {
        return <Navigate to="/iniciar-sesion" />;
    }

    const isAllowed = allowedRoles.includes("All") || allowedRoles.includes(user?.role);

    if (!isAllowed) {
        return <Navigate to="/" />;
    }

    return children;
};