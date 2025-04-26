import { FormGroup, Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import { InputGenericControl } from "../Controls/Inputs/InputGenericControl";

export const GenericForm = ({ fields, buttonLabel, onSubmit }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

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

                    if (config.type === 'checkbox') {
                        return (
                            <div>
                                "ES UN CHECK"
                            </div>
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

                <Button
                    variant="contained"
                    type='submit'
                    sx={{
                        borderRadius: '8px',
                        height: '44px',
                        background: isDark ? 'var(--primary-main)' : 'var(--primary-dark)',
                        '&:hover': {
                            background: isDark ? 'var(--primary-800)' : 'var(--primary-200)'
                        },
                        color: "white",
                    }}
                >
                    {buttonLabel}
                </Button>
            </FormGroup>
        </form>
    );
};