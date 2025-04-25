import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

export const InputTextControl = ({ label, value = '', onChange }) => {
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <OutlinedInput
                    type='text'
                    margin='dense'
                    label={label}
                    value={value}
                    onChange={onChange}
                />
            </FormControl>
        </div>
    );
}