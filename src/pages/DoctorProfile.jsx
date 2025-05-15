import { Container, Typography, Button } from '@mui/material';
import { DoctorInfoCard } from '../components/Cards/DoctorInfoCard';
import { DaysAvailableCard } from '../components/Cards/DaysAvailableCard';
import { EditInfoDoctor } from '../components/EditInfoDoctor';
import { DaysAvailable } from '../components/DaysAvailable';

import { useState } from 'react';

export const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({
    nombre: 'Juan Pérez',
    especialidad: 'Cardiología',
    matricula: '123456',
    contacto: 'juan.perez@ejemplo.com',
  });

  const [horarios, setHorarios] = useState({
    lunes: '8:00 - 12:00',
    martes: '8:00 - 16:00',
    miercoles: '8:00 - 17:00',
    jueves: '8:00 - 16:00',
    viernes: '8:00 - 16:00',
  });

  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);
  const handleDoctorSave = (updatedDoctor) => {
    setDoctor(updatedDoctor);
  };

  const [isDisponibilidadOpen, setIsDisponibilidadOpen] = useState(false);
  const handleDisponibilidadOpen = () => setIsDisponibilidadOpen(true);
  const handleDisponibilidadClose = () => setIsDisponibilidadOpen(false);
  const handleDisponibilidadSave = (updatedHorarios) => {
    setHorarios(updatedHorarios);
  };

  return (
  
    <Container maxWidth="md" sx={{ mt: 4}} >
      <Typography variant="h4" gutterBottom align="center">
        Mi Perfil
      </Typography>

      <DoctorInfoCard
        doctor={doctor}
        onEdit={handleEditOpen} />

      <DaysAvailableCard
        horarios={horarios}
        handleDisponibilidadOpen={handleDisponibilidadOpen} />



      <EditInfoDoctor
        open={isEditOpen}
        doctor={doctor}
        onClose={handleEditClose}
        onSave={handleDoctorSave}
      />

      <DaysAvailable
        open={isDisponibilidadOpen}
        horario={horarios}
        onClose={handleDisponibilidadClose}
        onSave={handleDisponibilidadSave}
      />

      <footer>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 4 }}
        >
          Aca va el footer
        </Typography>
      </footer>
    </Container>
  );
};
