import { AuthLayout } from "../layouts/AuthLayout";
import { LoginForm } from "../components/Forms/LoginForm";
import { Link } from "react-router-dom";
import { useThemeMode } from "../context/ThemeProvider";

export const Login = () => {
    const { darkMode } = useThemeMode();

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
            <Link to={'/recuperar-contraseña'} className="w-[90%] p-2 text-sm mt-2" style={{ color: darkMode ? 'var(--primary-main)' : 'var(--primary-dark)' }}>
                ¿Olvidaste tu contraseña?
            </Link>
        </AuthLayout>
    );
};