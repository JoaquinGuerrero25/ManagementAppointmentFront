import { patientCreateRequest } from "../constants/patientFields";
import { GenericForm } from "../components/Forms/GenericForm";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";

export const Register = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

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