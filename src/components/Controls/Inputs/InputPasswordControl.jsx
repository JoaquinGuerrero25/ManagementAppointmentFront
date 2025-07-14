import React, { useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const InputPasswordControl = ({ name = 'Password', label = 'Contraseña', value = '', onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
            <FormControl size="small" fullWidth>
                <InputLabel>Contraseña</InputLabel>
                <OutlinedInput
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    margin='dense'
                    label={label}
                    value={value}
                    onChange={onChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    sx={{
                        borderRadius: '8px'
                    }}
                />
            </FormControl>
        </div>
    );
}