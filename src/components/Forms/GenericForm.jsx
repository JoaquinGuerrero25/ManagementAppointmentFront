import { FormGroup, Box } from "@mui/material";
import { useState } from "react";
import { InputGenericControl } from "../Controls/Inputs/InputGenericControl";

export const GenericForm = ({ fields, onSubmit }) => {
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
        <FormGroup>
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
                            type={config.type}
                            value={config.value}
                            label={config.label}
                            placeholder={config.placeholder}
                            onChange={handleChange}
                        />
                    </Box>
                );
            })}
        </FormGroup>
    );
};