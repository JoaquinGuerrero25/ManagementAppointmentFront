import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

export const RegisterForm = ({ fields }) => {
  const [data, setData] = useState(
    Object.keys(fields).reduce((acc, key) => {
      acc[key] = fields[key].value;
      return acc;
    }, {})
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(fields).map((fieldKey) => {
        const field = fields[fieldKey];

        // Renderiza un Checkbox
        if (field.type === 'checkbox') {
          return (
            <FormControlLabel
              key={fieldKey}
              control={
                <Checkbox
                  checked={data[fieldKey]}
                  onChange={handleInputChange}
                  name={fieldKey}
                  color="primary"
                />
              }
              label={field.label}
            />
          );
        }

        if (field.type === 'password') {
            return (
                <div>
                    holaaaa
                </div>
            )
        }

        // Renderiza un Select (dropdown)
        if (field.type === 'select') {
          return (
            <FormControl fullWidth key={fieldKey} required={field.required}>
              <InputLabel>{field.label}</InputLabel>
              <Select
                value={data[fieldKey] || ''}
                onChange={handleInputChange}
                name={fieldKey}
                label={field.label}
              >
                {field.options.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }

        // Renderiza un campo de texto (TextField)
        return (
          <TextField
            key={fieldKey}
            name={fieldKey}
            label={field.label}
            type={field.type}
            value={data[fieldKey] || ''}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            required={field.required}
            fullWidth
          />
        );
      })}
      <Button type="submit" variant="contained" color="primary">
        Registrar
      </Button>
    </form>
  );
};