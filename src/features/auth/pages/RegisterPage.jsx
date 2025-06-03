import { GenericForm } from "../../../components/Forms/GenericForm";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { RegisterPatientForm } from "../components/RegisterPatientForm";

export const RegisterPatientPage = () => {
    return (
        <AuthLayout
            title={'Regístrate'}
            subtitle={'Ya tenes una cuenta?'}
            linkText={'Iniciar sesión'}
            linkHref={'/iniciar-sesion'}
        >
            <RegisterPatientForm />
        </AuthLayout>
    );
};