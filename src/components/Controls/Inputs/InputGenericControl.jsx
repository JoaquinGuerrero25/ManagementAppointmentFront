import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export const InputGenericControl = ({ name, label, value = '', type, placeholder, required, onChange }) => {
    return (
        <div>
            <FormControl required={required} fullWidth>
                <InputLabel>{label}</InputLabel>
                <OutlinedInput
                    name={name}
                    type={type}
                    margin="dense"
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                    sx={{
                        borderRadius: '12px'
                    }}
                />
            </FormControl>
        </div>
    );
};