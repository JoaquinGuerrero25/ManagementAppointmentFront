import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../authThunks";
import { FormGroup } from "@mui/material";
import { InputGenericControl } from "../../../components/Controls/Inputs/InputGenericControl";
import { InputPasswordControl } from "../../../components/Controls/Inputs/InputPasswordControl";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(formData)).unwrap();
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <FormGroup sx={{ width: '96%', maxWidth: '760px', gap: '12px' }}>
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
                <ButtonGenericControl
                    label={'Iniciar sesión'}
                    action={handleSubmit}
                />
            </FormGroup>
        </form>
    );
}