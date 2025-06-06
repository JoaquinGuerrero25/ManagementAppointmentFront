import { Box } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { WelcomeCard } from "../components/WelcomeCard";
import { useEffect, useState } from "react";
import { get_data_dashboard_doctor } from "../dashboardService";
import { useSelector } from "react-redux";
import { InfoCard } from "../components/InfoCard";
import { AppointmentStatusCard } from "../components/AppointmentStatusCard";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { medicalHistoryModels } from "../../../constants/medicalHistoryConstant";
import { get_medical_history_doctor } from "../../medicalHistory/medicalHistoryService";
import { useNavigate } from "react-router-dom";

export const DashboardDoctorPage = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const [dataDashboard, setDataDashboard] = useState(null);
    const [medicalHistory, setMedicalHistory] = useState([]);

    const handleMedicalHistory = async () => {
        const data = await get_medical_history_doctor(user?.id);
        setMedicalHistory(data);
    };

    const handleDataDashboard = async () => {
        const data = await get_data_dashboard_doctor(user?.id);
        setDataDashboard(data);
    };

    const handleClickViewMedicalHistory = () => {
        navigate('/doctor/historial-medico');
    };

    useEffect(() => {
        if (user?.id) {
            handleDataDashboard();
            handleMedicalHistory();
        }
    }, []);

    return (
        <MainLayout>
            <Box
                width={'100%'}
                display='flex'
                flexDirection='column'
                paddingBottom={'calc(3 * var(--spacing))'}
                gap='calc(3 * var(--spacing))'
                sx={{
                    minHeight: {
                        xs: 'calc(100vh - 64px)',
                        lg: 'calc(100vh - 72px})'
                    }
                }}
            >
                <WelcomeCard
                    description="Revisa tu agenda de consultas, accede al historial clínico de tus pacientes y mantente al día con tus tareas médicas."
                />
                <Box
                    display="grid"
                    sx={{
                        gap: 'calc(3 * var(--spacing))',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, 1fr)',
                        },
                    }}
                >
                    <InfoCard labelCard="Citas programadas hoy" data={String(dataDashboard?.appoinmentToday)} porcentage='0' />
                    <InfoCard labelCard="Citas registradas en total" data={String(dataDashboard?.appointmentTotal)} porcentage='0' />
                </Box>
                <Box
                    display={'flex'}
                    sx={{
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 'calc(3 * var(--spacing))',
                    }}
                >
                    <Box>
                        <AppointmentStatusCard
                            appointmentConfirmed={dataDashboard?.appointmentConfirmed}
                            appointmentCancel={dataDashboard?.appointmentCanceled}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: { xs: '100%', lg: '70%' },
                        }}
                    >
                        <GenericTable
                            title="Historial Médico"
                            columns={medicalHistoryModels}
                            rows={medicalHistory}
                            pagination={false}
                            showViewAllButton={true}
                            onViewAll={handleClickViewMedicalHistory}
                        />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    );
};