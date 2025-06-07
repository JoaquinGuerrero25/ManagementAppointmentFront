import { Alert, Box } from "@mui/material";
import { InputGenericControl } from "../../../components/Controls/Inputs/InputGenericControl";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { reset_password } from "../authService";

export const ResetPasswordForm = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            setError('El token no es valido.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        const data = await reset_password(token, formData.password);
        if (data === true) navigate('/iniciar-sesion');
    };


    return (
        <>
            <form style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box width="96%" display="flex" flexDirection="column" gap="16px">
                    <InputGenericControl
                        name="password"
                        type='password'
                        label="Nueva contraseña"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <InputGenericControl
                        name="confirmPassword"
                        type='password'
                        label="Confirmar nueva contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <ButtonGenericControl
                        width="100%"
                        label={'Restablecer contraseña'}
                        action={handleSubmit}
                    />
                    {error?.length > 0 && (
                        <Alert severity="error" sx={{ borderRadius: '8px' }}>
                            {error}
                        </Alert>
                    )}
                </Box>
            </form>
        </>
    );
};