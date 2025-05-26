import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";
import { ButtonGenericControl } from "../../components/Controls/Buttons/ButtonGenericControl";
import { GenericTable } from "../../components/Tables/GenericTable";
import { useEffect, useState } from "react";
import { patientModel } from "../../constants/patientConstant";
import { get_patients } from "../../api/patientService";
import { Add } from "@mui/icons-material";

export const Patient = () => {
    const [patients, setPatients] = useState([]);
    // const [patientSelected, setPatientSelected] = useState(null);

    const handlePatients = async () => {
        const data = await get_patients();
        setPatients(data);
    };

    useEffect(() => {
        handlePatients();
    }, []);

    return (
        <MainLayout>
            <Box pb={6} px={2} width={'100%'} display={"flex"} flexDirection={'column'} gap={3}>
                <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                            Pacientes
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Administra los pacientes de la clinica.
                        </Typography>
                    </Box>
                    <ButtonGenericControl label="Agregar" icon={<Add fontSize="large" />} iconPosition="start" action={() => setOpenDialogForm(true)} />
                </Box>
                <GenericTable columns={patientModel} rows={patients} filterKeys={['name', 'lastName']} />
            </Box>
        </MainLayout>
    );
};