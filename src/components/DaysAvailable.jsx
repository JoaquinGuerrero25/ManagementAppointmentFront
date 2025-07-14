import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';


export const DaysAvailable = ({ open, horario, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        lunes: '',
        martes: '',
        miercoles: '',
        jueves: '',
        viernes: ''
    });

    useEffect(() => {
        if (horario) {
            setFormData(horario);
        }
    }, [horario]);

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
            <DialogTitle>Mis Horarios</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Lunes"
                    name="lunes"
                    value={formData.lunes}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Martes"
                    name="martes"
                    value={formData.martes}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Miércoles"
                    name="miercoles"
                    value={formData.miercoles}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Jueves"
                    name="jueves"
                    value={formData.jueves}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Viernes"
                    name="viernes"
                    value={formData.viernes}
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
};
