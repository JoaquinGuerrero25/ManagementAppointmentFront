import { AuthLayout } from "../layouts/AuthLayout";
import { LoginForm } from "../components/Forms/LoginForm";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

export const Login = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const handleSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <AuthLayout
            title={'Iniciá sesión'}
            subtitle={'¿No tenés una cuenta?'}
            linkText={'Registrate'}
            linkHref={'/registro'}
        >
            <LoginForm onSubmit={handleSubmit} />
            <Link to={'/recuperar-contraseña'} className="w-[90%] p-2 text-sm mt-2" style={{ color: isDark ? 'var(--primary-main)' : 'var(--primary-dark)' }}>
                ¿Olvidaste tu contraseña?
            </Link>
        </AuthLayout>
    );
};