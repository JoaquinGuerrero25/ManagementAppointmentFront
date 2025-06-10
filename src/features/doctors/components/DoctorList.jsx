import { Box } from '@mui/material';
import { DoctorCard } from '../../../components/Cards/DoctorCard';

export const DoctorList = ({ doctors }) => {
  if (!doctors.length) return null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </Box>
  );
};
