import { Link } from "react-router-dom";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { LoginForm } from "../components/LoginForm";
import { useThemeMode } from "../../../context/ThemeProvider";

export const LoginPage = () => {
    const { darkMode } = useThemeMode();

    return (
        <AuthLayout
            title={'Iniciá sesión'}
            subtitle={'¿No tenés una cuenta?'}
            linkText={'Registrate'}
            linkHref={'/registro'}
        >
            <LoginForm />
            <Link
                to={'/recuperar-contraseña'}
                className="w-[90%] p-2 text-sm mt-2"
                style={{ color: darkMode ? 'var(--primary-main)' : 'var(--primary-dark)' }}
            >
                ¿Olvidaste tu contraseña?
            </Link>
        </AuthLayout>
    );
};