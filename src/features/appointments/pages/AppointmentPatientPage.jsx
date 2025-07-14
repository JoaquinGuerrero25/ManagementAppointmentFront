import { useSelector } from "react-redux";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";
import { SectionHeader } from "../../../components/SectionHeader";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { MainLayout } from "../../../layouts/MainLayout";
import { useEffect, useState } from "react";
import { cancel_appoitment, get_appointment_by_patient } from "../appointmnetService";
import { appointmentModel } from "../../../constants/appointmentConstant";
import { CancelRounded } from "@mui/icons-material";
import { formatDateLong, formatTime } from "../../../utils/viewsUtils";
import { useNavigate } from "react-router-dom";

export const AppointmentPatientPage = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [openDialogCancel, setOpenDialogCancel] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [appointmentSelected, setAppointmentSelected] = useState(null);

    const handleAppointments = async () => {
        const data = await get_appointment_by_patient(user?.id);
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
                buttonLabel="Solicitar nuevo turno"
                onButtonClick={() => navigate('/paciente/solicitar-turno')}
            >
                <GenericTable
                    columns={appointmentModel}
                    rows={appointments}
                    actions={[actionCancel]}
                    filterKeys={['date', 'doctorName']}
                />
            </SectionHeader>

            <GenericConfirmDialog
                open={openDialogCancel}
                title="Confirmar cancelación"
                message={`¿Desea cancelar el turno del ${formatDateLong(appointmentSelected?.date)} a las ${formatTime(appointmentSelected?.time)} con el Dr. ${appointmentSelected?.doctorName}? Esta acción es permanente.`}
                onClose={handleClose}
                onConfirm={handleCancel}
            />
        </MainLayout>
    );
};