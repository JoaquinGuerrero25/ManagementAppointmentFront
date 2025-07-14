import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { WelcomeCard } from "../components/WelcomeCard";
import { InfoCard } from "../components/InfoCard";
import { get_data_dashboard_patient } from "../dashboardService";
import { DataCard } from "../components/DataCard";
import { CalendarMonthRounded } from "@mui/icons-material";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { medicalHistoryModels } from "../../../constants/medicalHistoryConstant";
import { get_medical_history_patient } from "../../medicalHistory/medicalHistoryService";
import { useNavigate } from "react-router-dom";
import { formatDateLong } from "../../../utils/viewsUtils";

export const DashboardPatientPage = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [dataDashboard, setDataDashboard] = useState(null);
    const [medicalHistory, setMedicalHistory] = useState([]);

    const handleDataDashboard = async () => {
        const data = await get_data_dashboard_patient(user?.id);
        setDataDashboard(data);
    };

    const handleMedicalHistory = async () => {
        const data = await get_medical_history_patient(user?.id);
        setMedicalHistory(data);
    };


    const handleClickViewMedicalHistory = () => {
        navigate('/paciente/historial-medico');
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
                    description="Accede a tu historial médico, reserva turnos y mantén el control de tu salud desde un solo lugar."
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
                    <DataCard labelCard="Proxima cita" data={dataDashboard?.nextAppointment ? formatDateLong(dataDashboard?.nextAppointment?.date) : '-'} icon={<CalendarMonthRounded sx={{ fontSize: '52px' }} color="primary" />} />
                    <InfoCard labelCard="Citas confirmadas" data={String(dataDashboard?.appointmentsConfirmed)} />
                </Box>
                <GenericTable
                    title="Historial Médico"
                    columns={medicalHistoryModels}
                    rows={medicalHistory}
                    pagination={false}
                    showViewAllButton={true}
                    onViewAll={handleClickViewMedicalHistory}
                />
            </Box>
        </MainLayout>
    );
};