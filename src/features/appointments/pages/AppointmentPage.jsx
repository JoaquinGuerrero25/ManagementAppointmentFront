import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { DoctorSelect } from "../components/DoctorSelect";
import { DateSelect } from "../../../components/Controls/Select/DateSelect";
import { AppointmentSearchFilters } from "../components/AppointmentSearchFilters";

export const AppointmentPage = () => {
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <MainLayout>
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'start'}
                gap={'calc(2 * var(--spacing))'}
            >
                <Box
                    width={'100%'}
                    display='flex'
                    justifyContent='space-between'
                    gap='calc(2 * var(--spacing))'
                    sx={{
                        alignItems: { xs: 'start', md: 'center' },
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Box display='flex' flexDirection='column' alignItems='start' justifyContent='center' gap='var(--spacing)'>
                        <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                            Solicitar turno
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Reservá tu turno eligiendo doctor y fecha.
                        </Typography>
                    </Box>
                </Box>

                <AppointmentSearchFilters
                    doctor={selectedDoctor}
                    onDoctorChange={setSelectedDoctor}
                    date={selectedDate}
                    onDateChange={setSelectedDate}
                />

                <DoctorSelect 
                    value={selectedDoctor} 
                    onChange={(e) => {setSelectedDoctor(e.target.value); console.log(e.target.value);} } 
                />
                <DateSelect />
            </Box>
        </MainLayout>
    );
};