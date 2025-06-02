import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { WelcomeCard } from "../components/WelcomeCard";
import { InfoCard } from "../components/InfoCard";
import { MainLayout } from "../../../layouts/MainLayout";
import { get_data_dashboard_admin } from "../dashboardService";
import { ActiveUsersByRoleCard } from "../components/ActiveUsersByRoleCard";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { specialtyModel } from "../../../constants/specialtyConstant";
import { get_specialties_thunks } from "../../specialty/specialtyThunks";

export const DashboardAdminPage = () => {
    const specialtiesState = useSelector((state) => state.specialties.specialties);
    const navigate = useNavigate();

    const [dataDashboard, setDataDashboard] = useState(null);
    const [specialties, setSpecialties] = useState([]);

    const handleDataDashboardAdmin = async () => {
        const data = await get_data_dashboard_admin();
        setDataDashboard(data);
    };

    const handleSpecialties = async () => {
        if (Array.isArray(specialtiesState) && specialtiesState.length > 0) {
            setSpecialties(specialtiesState);
            return;
        }

        const data = await get_specialties_thunks();
        setSpecialties(data);
    };

    const handleClickViewAll = () => {
        navigate('/administrador/especialidades');
    };

    useEffect(() => {
        handleDataDashboardAdmin();
        handleSpecialties();
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
                <WelcomeCard />
                <Box
                    display="grid"
                    sx={{
                        gap: 'calc(3 * var(--spacing))',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                    }}
                >
                    <InfoCard labelCard="Pacientes activos" data={String(dataDashboard?.activePatient)} porcentage="0" />
                    <InfoCard labelCard="Doctores activos" data={String(dataDashboard?.activeDoctor)} porcentage="0" />
                    <InfoCard labelCard="Citas para hoy" data={String(dataDashboard?.appoinmentToday)} porcentage="-1" />
                </Box>
                <Box
                    display="grid"
                    sx={{
                        gap: 'calc(3 * var(--spacing))',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                    }}
                >
                    <Box>
                        <ActiveUsersByRoleCard
                            patientsActive={dataDashboard?.activePatient}
                            doctorsActive={dataDashboard?.activeDoctor}
                        />
                    </Box>
                    <Box sx={{ gridColumn: { xs: 'auto', md: 'span 2', } }}>
                        <GenericTable
                            columns={specialtyModel}
                            rows={specialties}
                            title='Especialidades'
                            pagination={false}
                            showViewAllButton={true}
                            onViewAll={handleClickViewAll}
                        />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    );
};