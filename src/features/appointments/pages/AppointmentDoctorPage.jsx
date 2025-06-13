import { useEffect, useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { appointmentModel } from "../../../constants/appointmentConstant";
import { MainLayout } from "../../../layouts/MainLayout";
import { useSelector } from "react-redux";
import { cancel_appoitment, get_appointment_by_doctor } from "../appointmnetService";
import { CancelRounded } from "@mui/icons-material";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";
import { formatDateLong, formatTime } from "../../../utils/viewsUtils";

export const AppointmentDoctorPage = () => {
    const { user } = useSelector((state) => state.auth);

    const [openDialogCancel, setOpenDialogCancel] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [appointmentSelected, setAppointmentSelected] = useState(null);

    const handleAppointments = async () => {
        const data = await get_appointment_by_doctor(user?.id);
        setAppointments(data);
    };

    useEffect(() => {
        handleAppointments();
    }, []);

    const handleClose = () => {
        setOpenDialogCancel(false);
        setAppointmentSelected(null);
    };

    const handleCancel = async () => {
        await cancel_appoitment(appointmentSelected?.id);
        setOpenDialogCancel(false);
        handleAppointments();
    };

    const actionCancel = {
        Icon: CancelRounded,
        Label: 'Cancelar',
        Action: (appointment) => {
            setAppointmentSelected(appointment);
            setOpenDialogCancel(true);
        },
    };

    return (
        <MainLayout>
            <SectionHeader
                title="Mis Turnos"
                description="Administra tus turnos y controla tu agenda de pacientes."
            >
                <GenericTable
                    columns={appointmentModel}
                    rows={appointments}
                    actions={[actionCancel]}
                    filterKeys={['date', 'patientName']}
                />
            </SectionHeader>

            <GenericConfirmDialog
                open={openDialogCancel}
                title="Confirmar cancelación"
                message={`¿Desea cancelar el turno del ${formatDateLong(appointmentSelected?.date)} a las ${formatTime(appointmentSelected?.time)} con el paciente ${appointmentSelected?.patientName}? Esta acción es permanente.`}
                onClose={handleClose}
                onConfirm={handleCancel}
            />
        </MainLayout>
    );
};