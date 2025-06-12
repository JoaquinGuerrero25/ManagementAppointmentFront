import { TextField } from "@mui/material";

export const InputDateControl = ({ label = "Fecha", value, onChange, disabled = false, required = false, error = false, helperText = "" }) => {
    return (
        <TextField
            type="date"
            variant="outlined"
            label={label}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
            error={error}
            helperText={helperText}
            slotProps={{
                inputLabel: { shrink: true },
                root: {
                    sx: {
                        "& fieldset": { borderRadius: '8px' }
                    }
                }
            }}
            fullWidth
            size="small"
        />
    );
};