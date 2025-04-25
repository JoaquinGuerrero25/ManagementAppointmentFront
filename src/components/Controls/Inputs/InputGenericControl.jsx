import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export const InputGenericControl = ({ label, value = '', type, placeholder, onChange }) => {
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <OutlinedInput
                    type={type}
                    margin="dense"
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </FormControl>
        </div>
    );
};