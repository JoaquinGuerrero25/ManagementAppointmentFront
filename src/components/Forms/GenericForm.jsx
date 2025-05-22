import { FormGroup, Box } from "@mui/material";
import { TextareaGenericControl } from "../Controls/Inputs/TextareaGenericControl";
import { InputGenericControl } from "../Controls/Inputs/InputGenericControl";

export const GenericForm = ({ fields, value, onChange }) => {
    const handleChange = (e) => {
        const { name, value: val } = e.target;
        onChange(name, val);
    };

    return (
        <form className="flex flex-col items-center w-full">
            <FormGroup sx={{ width: '100%', gap: '16px' }}>
                {fields?.filter(field => field.visible)
                    .map(field => {
                        if (field.type === 'textarea') {
                            return (
                                <TextareaGenericControl
                                    key={field.name}
                                    name={field.name}
                                    label={field.label}
                                    value={value[field.name]}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    onChange={handleChange}
                                />
                            );
                        }

                        return (
                            <InputGenericControl
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                value={value[field.name]}
                                type={field.type || 'text'}
                                placeholder={field.placeholder}
                                required={field.required}
                                onChange={handleChange}
                            />
                        );
                    })}
            </FormGroup>
        </form>
    );
};