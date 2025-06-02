import { useEffect, useState } from "react";
import { SpecialtyForm } from "../components/SpecialtyForm";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { specialtyModel } from "../../../constants/specialtyConstant";
import { MainLayout } from "../../../layouts/MainLayout";
import { delete_specialty } from "../specialtyService";
import { Add, DeleteRounded, EditRounded } from "@mui/icons-material";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";
import { Box, Typography } from "@mui/material";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { get_specialties_thunks } from "../specialtyThunks";

export const SpecialtyPage = () => {
    const [specialties, setSpecialties] = useState([]);
    const [openDialogForm, setOpenDialogForm] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [specialtySelected, setSpecialtySelected] = useState(null);

    const handleSpecialties = async () => {
        const data = await get_specialties_thunks();
        setSpecialties(data);
    };

    useEffect(() => {
        handleSpecialties();
    }, []);

    const handleCloseDialogSpecialty = () => {
        setOpenDialogDelete(false);
        setOpenDialogForm(false);
        setSpecialtySelected(null);
    };

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

    const actionEdit = {
        Icon: EditRounded,
        Label: 'Editar',
        Action: (specialty) => {
            setSpecialtySelected(specialty);
            setOpenDialogForm(true);
        },
    };

    const actionDelete = {
        Icon: DeleteRounded,
        Label: 'Eliminar',
        Action: async (specialty) => {
            setSpecialtySelected(specialty);
            setOpenDialogDelete(true);
        },
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
                            Especialidades
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Gestiona las especialidades médicas de la clínica.
                        </Typography>
                    </Box>
                    <ButtonGenericControl label="Agregar" icon={<Add fontSize="large" />} iconPosition="start" action={() => setOpenDialogForm(true)} />
                </Box>
                <GenericTable
                    columns={specialtyModel}
                    rows={specialties}
                    filterKeys={['name', 'description']}
                    actions={[actionEdit, actionDelete]}
                />
            </Box>
            <SpecialtyForm
                open={openDialogForm}
                onClose={handleCloseDialogSpecialty}
                onSubmit={handleFormSubmit}
                specialty={specialtySelected}
            />
            <GenericConfirmDialog
                open={openDialogDelete}
                onClose={handleCloseDialogSpecialty}
                onConfirm={confirmDelete}
                title="Confirmar eliminación"
                message={`¿Estás seguro que deseas eliminar la especialidad "${specialtySelected?.name}"? Esta acción no se puede deshacer.`}
                confirmLabel="Eliminar"
            />
        </MainLayout>
    );
};