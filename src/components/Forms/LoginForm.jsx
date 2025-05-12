import { Button, FormGroup } from "@mui/material";
import { useState } from "react";
import { InputGenericControl } from "../Controls/Inputs/InputGenericControl";
import { InputPasswordControl } from "../Controls/Inputs/InputPasswordControl";

export const LoginForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <FormGroup sx={{ width: '90%', maxWidth: '760px', gap: '12px' }}>
                <InputGenericControl
                    name='Email'
                    type='text'
                    value={formData.Email}
                    label='Email'
                    placeholder='Ingresa el correo electrónico'
                    onChange={handleChange}
                />
                <InputPasswordControl
                    value={formData.Password}
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    type='submit'
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        height: '40px',
                        background: 'var(--gradient-blue-button)',
                        color: "white",
                        '&:hover': {
                            background: 'var(--gradient-blue-button-hover)',
                        },
                    }}
                >
                    Iniciar sesión
                </Button>
            </FormGroup>
        </form>
    );
}