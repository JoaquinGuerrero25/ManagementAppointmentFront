import { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Container, Box, Typography, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MainLayout } from '../../layouts/MainLayout';
import { get_specialties } from '../../features/specialty/specialtyService';
import { get_doctors } from '../../features/doctors/doctorService';
import { DoctorCard } from '../../components/Cards/DoctorCard';
import ScrollToTop from 'react-scroll-to-top';

export const Appointments = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState('');

  const [specialtyOptions, setSpecialtyOptions] = useState([]);
  const [insuranceOptions] = useState([
    'Obra Social 1',
    'Obra Social 2',
    'Particular'
  ]);

  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const specialties = await get_specialties();
        const specialtyNames = specialties.map((specialty) => specialty.name);
        setSpecialtyOptions(specialtyNames);
      } catch (error) {
        console.error('Error al obtener las especialidades:', error);
      }
    };

    fetchSpecialties();
  }, []);

  const handleSearch = async () => {
    try {
      const doctors = await get_doctors();
      setDoctorList(doctors);
    } catch (error) {
      console.error('Error al obtener los doctores:', error);
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

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center' }}>
          <FormControl sx={{ width: '45%' }}>
            <InputLabel id="select-specialty-label">Especialidad</InputLabel>
            <Select
              labelId="select-specialty-label"
              id="select-specialty"
              value={selectedSpecialty}
              label="Especialidad"
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialtyOptions.map((specialty, index) => (
                <MenuItem key={index} value={specialty}>
                  {specialty}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: '45%' }}>
            <InputLabel id="select-insurance-label">Obra Social</InputLabel>
            <Select
              labelId="select-insurance-label"
              id="select-insurance"
              value={selectedInsurance}
              label="Obra Social"
              onChange={(e) => setSelectedInsurance(e.target.value)}
            >
              {insuranceOptions.map((insurance, index) => (
                <MenuItem key={index} value={insurance}>
                  {insurance}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" size="large" onClick={handleSearch}>
            Buscar
          </Button>
        </Box>

        {doctorList.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
            {doctorList.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </Box>
        )}
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
