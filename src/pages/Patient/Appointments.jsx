import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MainLayout } from '../../layouts/MainLayout';
import { get_specialties } from '../../features/specialty/specialtyService';
import { get_filtered_doctors } from '../../features/doctors/doctorService';
import { AppointmentFilters } from '../../features/appointments/components/AppointmentFilters';
import { DoctorList } from '../../features/doctors/components/DoctorList';
import ScrollToTop from 'react-scroll-to-top';

export const Appointments = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [specialtyOptions, setSpecialtyOptions] = useState([]);
  const [insuranceOptions] = useState([
    'OSDE', 'PAMI', 'Swiss Medical', 'Previsión Salud', 'Federada Salud'
  ]);
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const specialties = await get_specialties();
        const names = specialties.map((s) => s.name);
        setSpecialtyOptions(names);
      } catch (error) {
        console.error('Error al obtener las especialidades:', error);
      }
    };

    fetchSpecialties();
  }, []);

  const handleSearch = async () => {
    try {
      if (!selectedSpecialty) {
        console.warn('Debe seleccionar una especialidad antes de buscar.');
        return;
      }

      const filters = { SpecialtyName: selectedSpecialty };
      const response = await get_filtered_doctors(filters);

      if (response && Array.isArray(response.items)) {
        setDoctorList(response.items);
      } else {
        console.warn('La respuesta no tiene el formato esperado:', response);
        setDoctorList([]);
      }
    } catch (error) {
      console.error('Error al obtener doctores filtrados:', error);
    }
  };

  return (
    <MainLayout>
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Solicitar Turno
        </Typography>
        <Typography variant="body1" textAlign="center">
          Seleccione una especialidad y una obra social para continuar con la solicitud de turno.
        </Typography>

        <AppointmentFilters
          specialtyOptions={specialtyOptions}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          insuranceOptions={insuranceOptions}
          selectedInsurance={selectedInsurance}
          setSelectedInsurance={setSelectedInsurance}
          onSearch={handleSearch}
        />

        <DoctorList doctors={doctorList} />
      </Container>

      <ScrollToTop
        smooth
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          width: 40,
          height: 40,
          borderRadius: '50%',
          position: 'fixed',
          bottom: 16,
          right: 16,
          boxShadow: 'none'
        }}
        component={<KeyboardArrowUpIcon style={{ color: 'white' }} />}
      />
    </MainLayout>
  );
};
