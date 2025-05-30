import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";
import { GenericTable } from "../../components/Tables/GenericTable";
import { useEffect, useState } from "react";
import { get_doctors } from "../../api/services/doctorService";
import { doctorModel } from "../../constants/doctorConstant";
import { Add, EditRounded } from "@mui/icons-material";
import { DoctorForm } from "../../components/Forms/DoctorForm";
import { ButtonGenericControl } from "../../components/Controls/Buttons/ButtonGenericControl";

export const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctorSelected, setDoctorSelected] = useState(null);
    const [openDialogForm, setOpenDialogForm] = useState(false);

    const handleDoctors = async () => {
        const data = await get_doctors();
        setDoctors(data);
    };

    useEffect(() => {
        handleDoctors();
    }, []);

    const handleCloseDialogDoctor = () => {
        setOpenDialogForm(false);
        setDoctorSelected(null);
    };

    const handleFormSubmit = async () => {
        handleDoctors();
        handleCloseDialogDoctor();
    };

    const actionEdit = {
        Icon: EditRounded,
        Label: 'Editar',
        Action: (doctor) => {
            setDoctorSelected(doctor);
            setOpenDialogForm(true);
        },
    };

    return (
        <MainLayout>
            <Box pb={6} px={2} width={'100%'} display={"flex"} flexDirection={'column'} gap={3}>
                <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                            Doctores
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Administra la información y disponibilidad del equipo médico.
                        </Typography>
                    </Box>
                    <ButtonGenericControl label="Agregar" icon={<Add fontSize="large" />} iconPosition="start" action={() => setOpenDialogForm(true)} />
                </Box>
                <GenericTable columns={doctorModel} rows={doctors} filterKeys={['name', 'lastName']} actions={[actionEdit]} />
            </Box>

            <DoctorForm
                open={openDialogForm}
                onClose={handleCloseDialogDoctor}
                doctor={doctorSelected}
                onSubmit={handleFormSubmit}
            />
        </MainLayout>
    );
};