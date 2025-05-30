import { useEffect, useState } from "react";
import { delete_specialty, get_specialties } from "../../api/services/specialtyService";
import { GenericTable } from "../../components/Tables/GenericTable";
import { specialtyModel } from "../../constants/specialtyConstant";
import { MainLayout } from "../../layouts/MainLayout";
import { Box, Typography } from "@mui/material";
import { ButtonGenericControl } from "../../components/Controls/Buttons/ButtonGenericControl";
import { Add, DeleteRounded, EditRounded } from "@mui/icons-material";
import { GenericConfirmDialog } from "../../components/Dialog/GenericConfirmDialog";
import { SpecialtyForm } from "../../components/Forms/SpecialtyForm";

export const Specialty = () => {
    const [openDialogForm, setOpenDialogForm] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [specialtySelected, setSpecialtySelected] = useState(null); // para el edit o delete
    const [specialties, setSpecialties] = useState([]); //para mostrar todas las especialidades

    // obtener todas las especialidades
    const handleSpecialties = async () => {
        const data = await get_specialties();
        setSpecialties(data);
    };

    // limpia la especialidad seleccionada y cierra los dialogs
    const handleCloseDialogSpecialty = () => {
        setOpenDialogDelete(false);
        setOpenDialogForm(false);
        setSpecialtySelected(null);
    };

    // accion para eliminar
    const confirmDelete = async () => {
        if (specialtySelected) {
            await delete_specialty(specialtySelected.id);
            handleSpecialties();
        }
        handleCloseDialogSpecialty();
    };

    const handleFormSubmit = async () => {
        handleSpecialties();
        handleCloseDialogSpecialty();
    };

    // Accion editar
    const actionEdit = {
        Icon: EditRounded,
        Label: 'Editar',
        Action: (specialty) => {
            setSpecialtySelected(specialty);
            setOpenDialogForm(true);
        },
    };

    // Accion eliminar
    const actionDelete = {
        Icon: DeleteRounded,
        Label: 'Eliminar',
        Action: async (specialty) => {
            setSpecialtySelected(specialty);
            setOpenDialogDelete(true);
        },
    };

    // carga las especialidades cuando se renderiza la vista
    useEffect(() => {
        handleSpecialties();
    }, []);

    return (
        <MainLayout>
            <Box pb={6} px={2} width={'100%'} display={"flex"} flexDirection={'column'} gap={3}>
                <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                            Especialidades
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Gestiona las especialidades médicas de la clínica.
                        </Typography>
                    </Box>
                    <ButtonGenericControl label="Agregar" icon={<Add fontSize="large" />} iconPosition="start" action={() => setOpenDialogForm(true)} />
                </Box>
                <GenericTable columns={specialtyModel} rows={specialties} filterKeys={['name', 'description']} actions={[actionEdit, actionDelete]} />
            </Box>

            {/* FORMULARIO PARA CREAR/EDITAR ESPECIALIDAD */}
            <SpecialtyForm
                open={openDialogForm}
                onClose={handleCloseDialogSpecialty}
                onSubmit={handleFormSubmit}
                specialty={specialtySelected}
            />

            {/* CONFIRMACION PARA ELIMINAR UNA ESPECIALIDAD */}
            <GenericConfirmDialog
                open={openDialogDelete}
                onClose={handleCloseDialogSpecialty}
                onConfirm={confirmDelete}
                title="Confirmar eliminación"
                message={`¿Estás seguro que deseas eliminar la especialidad "${specialtySelected?.name}"? Esta acción no se puede deshacer.`}
                confirmLabel="Eliminar"
            />
        </MainLayout >
    );
};