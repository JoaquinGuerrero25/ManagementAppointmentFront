import { useState } from "react";
import { Alert, Box } from "@mui/material";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { InputGenericControl } from "../../../components/Controls/Inputs/InputGenericControl";
import { forgot_password } from "../authService";

export const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [isCooldown, setIsCooldown] = useState(false);
    const [countdown, setCountdown] = useState(30);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setSuccess(false);
    };

    const handleSubmit = async () => {
        const data = await forgot_password(email);
        if (data === true) {
            setSuccess(true);

            setTimeout(() => setSuccess(false), 3000);

            setIsCooldown(true);
            setCountdown(30);

            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsCooldown(false);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };

    return (
        <>
            <form style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box width="96%" display="flex" flexDirection="column" gap="16px">
                    <InputGenericControl
                        name="email"
                        value={email}
                        label="Correo electrónico"
                        placeholder="Ingresa el correo electrónico"
                        type="email"
                        onChange={handleChange}
                    />

                    <ButtonGenericControl
                        width="100%"
                        label={
                            isCooldown ? `Reenviar (${countdown}s)` : 'Enviar solicitud'
                        }
                        action={handleSubmit}
                        disabled={isCooldown}
                    />
                    {success && (
                        <Alert severity="success" sx={{ borderRadius: '8px', width: '100%' }}>
                            El correo fue enviado exitosamente.
                        </Alert>
                    )}
                </Box>
            </form>
        </>
    );
};