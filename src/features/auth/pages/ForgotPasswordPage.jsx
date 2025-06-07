import { AuthLayout } from "../../../layouts/AuthLayout";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
    return (
        <AuthLayout
            title={'¿Olvidaste tu contraseña?'}
            subtitle={'Ingrese el correo electrónico asociado a su cuenta y le enviaremos un enlace para restablecer la contraseña.'}
        >
            <ForgotPasswordForm />
        </AuthLayout>
    );
};