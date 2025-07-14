import { Box, Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { get_specialties_thunks } from '../../specialty/specialtyThunks';
import { useEffect, useState } from 'react';
import { SelectGenericControl } from '../../../components/Controls/Select/SelectGenericControl';
import { useThemeMode } from '../../../context/ThemeProvider';
import { ButtonGenericControl } from '../../../components/Controls/Buttons/ButtonGenericControl';
import { SearchRounded } from '@mui/icons-material';
import { get_doctors } from '../../doctors/doctorService';
import { InputDateControl } from '../../../components/Controls/Inputs/InputDateControl';

export const AppointmentFilters = ({ formData, setFormData, onSearch }) => {
  const { specialties } = useSelector((state) => state.specialties);
  const { darkMode } = useThemeMode();

  const [specialtyOptions, setSpecialtyOptions] = useState([]);
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleSpecialties = async () => {
    if (Array.isArray(specialties) && specialties.length > 0) {
      setSpecialtyOptions(specialties);
    } else {
      const data = await get_specialties_thunks();
      setSpecialtyOptions(data);
    }
  };

  const handleDoctors = async () => {
    const data = await get_doctors();
    setDoctorOptions(data);
    setFilteredDoctors(data);
  };

  const filterDoctorsBySpecialty = (specialtyName) => {
    const filtered = doctorOptions.filter((doc) => doc.specialtyName === specialtyName);
    setFilteredDoctors(filtered);
    setFormData((prev) => ({
      ...prev,
      doctor: '',
    }));
  };

  useEffect(() => {
    handleSpecialties();
    handleDoctors();
  }, []);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'specialty') {
      filterDoctorsBySpecialty(value);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: '16px',
        color: darkMode ? 'var(--palette-text-primary)' : 'var(--palette-text-primary-light)',
        padding: 'calc(3 * var(--spacing))',
        boxShadow: 'var(--customShadows-card)',
        width: '100%',
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography
          component={'h2'}
          sx={{
            fontWeight: '600',
            fontSize: '1.2rem',
            lineHeight: '1.57'
          }}
        >
          Seleccioná Especialidad, Doctor y Fecha
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              lg: '2fr 2fr 2fr 1fr',
            },
            alignItems: 'center',
          }}
        >
          <SelectGenericControl
            label={'Especialidad'}
            name={'specialty'}
            value={formData?.specialty ?? ''}
            options={specialtyOptions}
            optionLabelKey='name'
            optionValueKey='name'
            onChange={handleChange}
          />
          <SelectGenericControl
            label={'Doctor'}
            name={'doctor'}
            value={formData?.doctor ?? ''}
            options={filteredDoctors}
            optionLabelKey='name'
            onChange={handleChange}
          />
          <InputDateControl
            label='Fecha'
            value={formData.date}
            onChange={(value) => handleChange('date', value)}
          />
          <ButtonGenericControl
            label={'Buscar'}
            iconPosition='start'
            icon={<SearchRounded />}
            action={onSearch}
          />
        </Box>
      </CardContent>
    </Card>
  );
};