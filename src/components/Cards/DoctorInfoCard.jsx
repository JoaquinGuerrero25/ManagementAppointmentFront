import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const DoctorInfoCard = ({ doctor, onEdit }) => {
  return (
    <Card sx={{ margin: 2}}>
      <CardContent>
        <Typography variant="h6">Dr. {doctor.nombre}</Typography>
        <Typography color="text.secondary">{doctor.especialidad}</Typography>
        <Typography color="text.secondary">Matrícula: {doctor.matricula}</Typography>
        <Typography color="text.secondary">Contacto: {doctor.contacto}</Typography>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
