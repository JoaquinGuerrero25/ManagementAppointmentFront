import { TextField } from "@mui/material";

export const InputTimeControl = ({ label = "Hora", value, onChange, disabled = false, required = false, error = false, helperText = "" }) => {
    return (
        <TextField
            type="time"
            variant="outlined"
            label={label}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            required={required}
            error={error}
            helperText={helperText}
            slotProps={{
                inputLabel: {
                    shrink: true
                },
                input: {
                    step: 1,
                },
                root: {
                    sx: {
                        "& fieldset": {
                            borderRadius: '8px',
                        },
                    },
                },
            }}
            fullWidth
            size="small"
        />
    );
};