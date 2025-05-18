import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, FormControl,InputLabel, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

// Lista de especialidades de ejemplo.
const especialidades = [
    "Cardiología",
    "Dermatología",
    "Pediatría",
    "Neurología",
    "Ginecología",
    "Oftalmología",
    "Traumatología",
    "Psiquiatría"
];
// *******************************

export const EditInfoDoctor = ({ open, doctor, onClose, onSave }) => {
    const [formData, setFormData] = useState(doctor);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Editar Perfil</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl margin="dense" fullWidth>
                    <InputLabel>Especialidad</InputLabel>
                    <Select
                        name="especialidad"
                        value={formData.especialidad}
                        onChange={handleChange}
                        label="Especialidad"
                    >
                        {especialidades.map((esp) => (
                            <MenuItem key={esp} value={esp}>{esp}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    margin="dense"
                    label="Matrícula"
                    name="matricula"
                    value={formData.matricula}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Contacto"
                    name="contacto"
                    value={formData.contacto}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSave} variant="contained">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
