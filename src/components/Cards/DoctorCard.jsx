import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

export const DoctorCard = ({ doctor }) => {
  return (
    <Card sx={{ width: '70%', mx: 'auto' }}>
      <CardContent>
        <Typography variant="h6">
          {doctor.lastName}, {doctor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Especialidad: {doctor.specialtyName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log(`Solicitar turno para el doctor ${doctor.id}`)}
        >
          Solicitar turno
        </Button>
      </CardActions>
    </Card>
  );
};
