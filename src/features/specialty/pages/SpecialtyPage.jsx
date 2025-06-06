import { useEffect, useState } from "react";
import { SpecialtyForm } from "../components/SpecialtyForm";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { specialtyModel } from "../../../constants/specialtyConstant";
import { MainLayout } from "../../../layouts/MainLayout";
import { delete_specialty } from "../specialtyService";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";
import { get_specialties_thunks } from "../specialtyThunks";
import { SectionHeader } from "../../../components/SectionHeader";

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
            <SectionHeader
                title="Especialidades"
                description="Gestiona las especialidades médicas de la clínica."
                buttonLabel="Agregar"
                onButtonClick={() => setOpenDialogForm(true)}
            >
                <GenericTable
                    columns={specialtyModel}
                    rows={specialties}
                    filterKeys={['name', 'description']}
                    actions={[actionEdit, actionDelete]}
                />
            </SectionHeader>
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