import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const SelectGenericControl = ({ label, value, name, onChange, options = [], optionValueKey = "value", optionLabelKey = "label", fullWidth = true, required = false }) => {
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
                    <MenuItem key={option[optionValueKey]} value={option[optionValueKey]}>
                        {option[optionLabelKey]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};