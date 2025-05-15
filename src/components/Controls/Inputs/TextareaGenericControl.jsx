import { TextField } from "@mui/material";

export const TextareaGenericControl = ({ name, label, value = '', placeholder, required, onChange, rows = 4 }) => {
    return (
        <TextField
            name={name}
            label={label}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            multiline
            rows={rows}
            fullWidth
            size="small"
            margin="dense"
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                }
            }}
        />
    );
};