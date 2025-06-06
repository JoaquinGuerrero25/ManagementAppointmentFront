import { MainLayout } from "../../../layouts/MainLayout";
import { BlockRounded, CheckRounded, EditRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { delete_doctor, get_doctors, update_doctor } from "../doctorService";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { doctorModel } from "../../../constants/doctorConstant";
import { DoctorForm } from "../components/DoctorForm";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";
import { SectionHeader } from "../../../components/SectionHeader";

export const DoctorAdminPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctorSelected, setDoctorSelected] = useState(null);
    const [openDialogForm, setOpenDialogForm] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [isEnableAction, setIsEnableAction] = useState(false);

    const handleDoctors = async () => {
        const data = await get_doctors();
        setDoctors(data);
    };

    useEffect(() => {
        handleDoctors();
    }, []);

    const confirmDelete = async () => {
        if (doctorSelected) {
            if (isEnableAction) {
                doctorSelected.isAvailable = true;
                await update_doctor(doctorSelected.id, doctorSelected);
            } else {
                await delete_doctor(doctorSelected.id);
            }
            await handleDoctors();
        }
        handleCloseDialogDoctor();
    };

    const handleCloseDialogDoctor = () => {
        setOpenDialogForm(false);
        setOpenDialogDelete(false);
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

    const getDoctorActions = (doctor) => {
        const isEnabled = doctor.isAvailable;

        return [
            actionEdit,
            {
                Icon: isEnabled ? BlockRounded : CheckRounded,
                Label: isEnabled ? 'Deshabilitar' : 'Habilitar',
                Action: () => {
                    setDoctorSelected(doctor);
                    setIsEnableAction(!isEnabled);
                    setOpenDialogDelete(true);
                },
            },
        ];
    };

    return (
        <MainLayout>
            <SectionHeader
                title="Doctores"
                description="Administra la información y disponibilidad del equipo médico."
                buttonLabel="Agregar"
                onButtonClick={() => setOpenDialogForm(true)}
            >
                <GenericTable
                    columns={doctorModel}
                    rows={doctors}
                    filterKeys={['name', 'lastName']}
                    actions={getDoctorActions}
                />
            </SectionHeader>
            <DoctorForm
                open={openDialogForm}
                onClose={handleCloseDialogDoctor}
                doctor={doctorSelected}
                onSubmit={handleFormSubmit}
            />
            <GenericConfirmDialog
                open={openDialogDelete}
                onClose={handleCloseDialogDoctor}
                onConfirm={confirmDelete}
                title={isEnableAction ? "Confirmar habilitación" : "Confirmar deshabilitación"}
                message={
                    isEnableAction
                        ? `¿Estás seguro de que deseas habilitar al doctor ${doctorSelected?.name} ${doctorSelected?.lastName}?`
                        : `¿Estás seguro de que deseas deshabilitar al doctor ${doctorSelected?.name} ${doctorSelected?.lastName}?`
                }
                confirmLabel={isEnableAction ? "Habilitar" : "Deshabilitar"}
            />
        </MainLayout>
    );
};