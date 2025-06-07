import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

export const AppointmentFilters = ({
  specialtyOptions,
  selectedSpecialty,
  setSelectedSpecialty,
  insuranceOptions,
  selectedInsurance,
  setSelectedInsurance,
  onSearch,
}) => {
  return (
    <>
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
        <Button variant="contained" color="primary" size="large" onClick={onSearch}>
          Buscar
        </Button>
      </Box>
    </>
  );
};
