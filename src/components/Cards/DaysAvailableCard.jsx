import { Card, CardContent, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const DaysAvailableCard = ({ horarios, handleDisponibilidadOpen }) => {
    return (

        <Card sx={{ margin: 2}}>
            <CardContent>
                <Typography variant="h6">Mis horarios de atención</Typography>
                <Typography color="text.secondary">Lunes: {horarios.lunes}</Typography>
                <Typography color="text.secondary">Martes: {horarios.martes}</Typography>
                <Typography color="text.secondary">Miércoles: {horarios.miercoles}</Typography>
                <Typography color="text.secondary">Jueves: {horarios.jueves}</Typography>
                <Typography color="text.secondary">Viernes: {horarios.viernes}</Typography>
                <Button type="submit" variant="outlined" sx={{ marginTop: 2 }} startIcon={<EditIcon />}
                    onClick={handleDisponibilidadOpen}>
                    Modificar horarios
                </Button>
            </CardContent>
        </Card>
    );
}









