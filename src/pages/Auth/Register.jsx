import { patientCreateRequest } from "../../constants/patientFields";
import { GenericForm } from "../../components/Forms/GenericForm";
import { AuthLayout } from "../../layouts/AuthLayout";

export const Register = () => {

    const handleSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <AuthLayout
            title={'Regístrate'}
            subtitle={'Ya tenes una cuenta?'}
            linkText={'Iniciar sesión'}
            linkHref={'/iniciar-sesion'}
        >
            <GenericForm
                fields={patientCreateRequest}
                buttonLabel={'Registrarme'}
                buttonType='submit'
                onSubmit={handleSubmit}
            />
        </AuthLayout>
    );
}