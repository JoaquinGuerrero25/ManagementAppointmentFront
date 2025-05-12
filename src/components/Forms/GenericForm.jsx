import { FormGroup, Box, Button } from "@mui/material";
import { useState } from "react";
import { InputGenericControl } from "../Controls/Inputs/InputGenericControl";
import { TextareaGenericControl } from "../Controls/Inputs/TextareaGenericControl";
import { ButtonTextControl } from "../Controls/Buttons/ButtonTextControl";
import { useNavigate } from "react-router-dom";

export const GenericForm = ({ fields, buttonLabel, onSubmit, buttonCancel }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        Object.fromEntries(Object.entries(fields).map(([key, config]) => [key, config.value]))
    );

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <FormGroup sx={{ width: '90%', maxWidth: '760px', gap: '12px' }}>
                {Object.entries(fields).map(([name, config]) => {
                    if (config.type === 'select') {
                        return (
                            <div>
                                "ES UN SELECT"
                            </div>
                        )
                    }

                    if (config.type === 'checkbox') {
                        return (
                            <div>
                                "ES UN CHECK"
                            </div>
                        )
                    }


                    if (config.type === 'textarea') {
                        return (
                            <Box key={name}>
                                <TextareaGenericControl
                                    name={name}
                                    type={config.type}
                                    value={formData[name]}
                                    label={config.label}
                                    placeholder={config.placeholder}
                                    required={config.required}
                                    onChange={handleChange}
                                />
                            </Box>
                        )
                    }

                    return (
                        <Box key={name}>
                            <InputGenericControl
                                name={name}
                                type={config.type}
                                value={formData[name]}
                                label={config.label}
                                placeholder={config.placeholder}
                                required={config.required}
                                onChange={handleChange}
                            />
                        </Box>
                    );
                })}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        gap: 2,
                    }}
                >
                    {buttonCancel && (
                        <ButtonTextControl
                            label='Cancelar'
                            action={() => navigate(buttonCancel)}
                        />
                    )}

                    <Button
                        variant="contained"
                        type='submit'
                        sx={{
                            borderRadius: '8px',
                            height: '40px',
                            textTransform: 'none',
                            background: 'var(--gradient-blue-button)',
                            color: 'white',
                            '&:hover': {
                                background: 'var(--gradient-blue-button-hover)',
                            },
                        }}
                    >
                        {buttonLabel}
                    </Button>
                </Box>
            </FormGroup>
        </form>
    );
};