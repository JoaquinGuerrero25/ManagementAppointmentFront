import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { Add, BlockRounded, CheckRounded, EditRounded } from "@mui/icons-material";
import { patientModel } from "../../../constants/patientConstant";
import { useEffect, useState } from "react";
import { delete_patient, get_patients, update_patient } from "../patientService";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { PatientForm } from "../components/PatientForm";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";

export const PatientAdminPage = () => {
    const [patients, setPatients] = useState([]);
    const [patientSelected, setPatientSelected] = useState(null);
    const [openDialogForm, setOpenDialogForm] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [isEnableAction, setIsEnableAction] = useState(false);


    const handlePatients = async () => {
        const data = await get_patients();
        setPatients(data);
    };

    useEffect(() => {
        handlePatients();
    }, []);

    const handleFormSubmit = async () => {
        handlePatients();
        handleCloseDialogPatient();
    };

    const handleCloseDialogPatient = () => {
        setOpenDialogForm(false);
        setOpenDialogDelete(false);
        setPatientSelected(null);
    };

    const confirmDelete = async () => {
        if (patientSelected) {
            if (isEnableAction) {
                patientSelected.isAvailable = true;
                await update_patient(patientSelected?.id, patientSelected);
            } else {
                await delete_patient(patientSelected?.id);
            }
            await handlePatients();
        }
        handleCloseDialogPatient();
    };

    const actionEdit = {
        Icon: EditRounded,
        Label: 'Editar',
        Action: (patient) => {
            setPatientSelected(patient);
            setOpenDialogForm(true);
        },
    };

    const getPatientActions = (patient) => {
        const isEnabled = patient.isAvailable;

        return [
            actionEdit,
            {
                Icon: isEnabled ? BlockRounded : CheckRounded,
                Label: isEnabled ? 'Deshabilitar' : 'Habilitar',
                Action: () => {
                    setPatientSelected(patient);
                    setIsEnableAction(!isEnabled);
                    setOpenDialogDelete(true);
                },
            },
        ];
    };

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
                            Pacientes
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Administra los pacientes de la clinica.
                        </Typography>
                    </Box>
                    <ButtonGenericControl label="Agregar" icon={<Add fontSize="large" />} iconPosition="start" action={() => {setOpenDialogForm(true); setPatientSelected(null)}} />
                </Box>
                <GenericTable
                    columns={patientModel}
                    rows={patients}
                    filterKeys={['name', 'lastName']}
                    actions={getPatientActions}
                />
            </Box>

            <PatientForm
                open={openDialogForm}
                patient={patientSelected}
                onClose={() => setOpenDialogForm(false)}
                onSubmit={handleFormSubmit}
            />

            <GenericConfirmDialog
                open={openDialogDelete}
                onClose={handleCloseDialogPatient}
                onConfirm={confirmDelete}
                title={isEnableAction ? "Confirmar habilitación" : "Confirmar deshabilitación"}
                message={
                    isEnableAction
                        ? `¿Estás seguro de que deseas habilitar al paciente ${patientSelected?.name} ${patientSelected?.lastName}?`
                        : `¿Estás seguro de que deseas deshabilitar al paciente ${patientSelected?.name} ${patientSelected?.lastName}?`
                }
                confirmLabel={isEnableAction ? "Habilitar" : "Deshabilitar"}
            />
        </MainLayout>
    );
}