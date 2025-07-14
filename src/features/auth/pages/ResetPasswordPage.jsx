import { AuthLayout } from "../../../layouts/AuthLayout";
import { ResetPasswordForm } from "../components/ResetPasswordForm";

export const ResetPasswordPage = () => {
    return (
        <AuthLayout
            title={'Restablecer contraseña'}
            subtitle={'Crea una nueva contraseña para acceder a tu cuenta.'}
        >
            <ResetPasswordForm />
        </AuthLayout>
    );
};