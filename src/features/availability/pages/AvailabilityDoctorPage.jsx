import { Box } from "@mui/material";
import { SectionHeader } from "../../../components/SectionHeader";
import { MainLayout } from "../../../layouts/MainLayout";
import { AvailabilityCard } from "../components/AvailabilityCard";
import { useEffect, useState } from "react";
import { get_doctor_with_availabilities } from "../../doctors/doctorService";
import { useSelector } from "react-redux";
import { days } from "../../../utils/viewsUtils";

export const AvailabilityDoctorPage = () => {
    const { user } = useSelector((state) => state.auth);

    const [availabilities, setAvailabilities] = useState([]);

    const handleAvailabilities = async () => {
        const doctor = await get_doctor_with_availabilities(user?.id);
        setAvailabilities(doctor?.availabilities);
    };

    useEffect(() => {
        if (user?.id) {
            handleAvailabilities();
        };
    }, [])

    return (
        <MainLayout>
            <SectionHeader
                title="Mi Disponibilidad"
                description="Configura tus horarios de trabajo para cada día de la semana"
            >
                <Box
                    paddingBottom={'24px'}
                    width={'100%'}
                    display="grid"
                    gap={'24px'}
                    sx={{
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr',
                            lg: '1fr 1fr' 
                        }
                    }}
                >
                    {days.map((day) => {
                        const availability = availabilities.find((a) => a.dayOfWeek === day.value);

                        return (
                            <AvailabilityCard
                                key={day.value}
                                userId={user?.id}
                                day={day}
                                onRefresh={handleAvailabilities}
                                availability={availability}
                            />
                        );
                    })}
                </Box>
            </SectionHeader>
        </MainLayout>
    );
};