import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectGenericControl = ({ label, value, name, onChange, options = [], optionValueKey, optionLabelKey = "label", fullWidth = true, required = false }) => {
    const handleChange = (e) => {
        const selectedValue = e.target.value;
        if (onChange && name) {
            onChange(name, selectedValue);
        }
    };

    return (
        <FormControl size="small" required={required} fullWidth={fullWidth}>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={value}
                name={name}
                required={required}
                onChange={handleChange}
                sx={{ borderRadius: "8px" }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option[optionValueKey]}
                        value={optionValueKey ? option[optionValueKey] : option}
                        sx={{
                            borderRadius: '6px'
                        }}
                    >
                        {option[optionLabelKey]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};