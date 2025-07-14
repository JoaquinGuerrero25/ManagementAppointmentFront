import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated
        ? <Navigate to='/' replace />
        : children;
};