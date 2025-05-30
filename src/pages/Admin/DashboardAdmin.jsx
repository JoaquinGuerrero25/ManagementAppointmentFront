import { MainLayout } from "../../layouts/MainLayout";
import { DataGenericControl } from "../../components/Controls/Data/DataGenericControl";
import { EventAvailableRounded, GroupRounded, MedicalServicesRounded } from "@mui/icons-material";
import { get_data_dashboard_admin } from "../../api/services/adminService";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GenericTable } from "../../components/Tables/GenericTable";
import { specialtyModel } from "../../constants/specialtyConstant";
import { get_specialties } from "../../api/services/specialtyService";
import { ButtonTextControl } from "../../components/Controls/Buttons/ButtonTextControl";

export const DashboardAdmin = () => {
    const navigate = useNavigate();

    const [dataDashboard, setDataDashboard] = useState(null);
    const [specialties, setSpecialties] = useState([]);

    const handleDataDashboardAdmin = async () => {
        const response = await get_data_dashboard_admin();
        setDataDashboard(response);
    };

    const handleSpecialties = async () => {
        const response = await get_specialties();
        // solo se muestran las primeras 10
        setSpecialties(response.slice(0, 10));
    };

    useEffect(() => {
        handleDataDashboardAdmin();
        handleSpecialties();
    }, []);

    return (
        <MainLayout>
            <Box pb={6} width={'100%'} display={"flex"} flexDirection={'column'} gap={1}>
                <Box px={2}>
                    <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                        Panel de control
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        Bienvenido al panel de control. Encuentra un resumen con la información más relevante.
                    </Typography>
                </Box>
                <Box
                    width='100%'
                    display="grid"
                    gap={2}
                    p={2}
                    gridTemplateColumns={{
                        xs: '1fr',
                        md: 'repeat(3, 1fr)'
                    }}
                    justifyItems="center"
                    alignItems="center"
                >
                    <DataGenericControl
                        width="100%"
                        icon={<GroupRounded sx={{ fontSize: '40px', color: '#2E7D32' }} />}
                        label="Pacientes activos"
                        data={`+ ${dataDashboard?.activePatient}`}
                        labelButton='Ver todos los pacientes'
                        actionButton={() => navigate('/administrador/pacientes')}
                    />
                    <DataGenericControl
                        width="100%"
                        icon={<MedicalServicesRounded sx={{ fontSize: '40px', color: '#1976D2' }} />}
                        label="Doctores activos"
                        data={`+ ${dataDashboard?.activeDoctor}`}
                        labelButton='Ver todos los doctores'
                        actionButton={() => navigate('/administrador/doctores')}
                    />
                    <DataGenericControl
                        width="100%"
                        icon={<EventAvailableRounded sx={{ fontSize: '40px', color: '#0288D1' }} />}
                        label="Citas para hoy"
                        data={`+ ${dataDashboard?.appoinmentToday}`}
                    />
                </Box>
                <Box px={2} >
                    <Box paddingY={2} display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' >
                        <Box px={1} display='flex' flexDirection='column' gap={1} >
                            <Typography variant="h4" component='h4' sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                Especialidades
                            </Typography>
                            <Typography component='p' variant="subtitle1" color="textSecondary" sx={{ fontSize: '15px' }}>
                                Visualiza las especialidades médicas disponibles en el sistema.
                            </Typography>
                        </Box>
                        <ButtonTextControl label='Ver todas las especialidades' action={() => navigate('/administrador/especialidades')} />
                    </Box>
                    <GenericTable columns={specialtyModel} rows={specialties} />
                </Box>
            </Box>
        </MainLayout>
    );
};
