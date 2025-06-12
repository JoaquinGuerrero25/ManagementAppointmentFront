import { useState } from "react";
import { MainLayout } from "../../../layouts/MainLayout";
import { SectionHeader } from "../../../components/SectionHeader";
import { AppointmentFilters } from "../components/AppointmentFilters";
import { add_appointment, get_appointment_availabilities } from "../appointmnetService";
import { AvailableAppointments } from "../components/AvailableAppointments";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";
import { formatDateLong, formatTime } from "../../../utils/viewsUtils";
import { useSelector } from "react-redux";

export const AppointmentPage = () => {
    const { user } = useSelector((state) => state.auth);

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [schedules, setSchedules] = useState([]);
    const [formData, setFormData] = useState({
        specialty: null,
        doctor: null,
        date: '',
        schedule: '',
    });

    const handleSearch = async () => {
        const data = await get_appointment_availabilities(formData?.doctor?.id, formData?.date);
        setSchedules(data);
    };

    const handleSelectSchedule = (schedule) => {
        setFormData((prev) => ({
            ...prev,
            schedule: schedule,
        }));
        setOpenConfirmDialog(true);
    };

    const handleConfirmSchedule = async () => {
        const params = {
            patientId: user?.id,
            doctorId: formData?.doctor?.id,
            date: formData?.date || '',
            time: formData.schedule || ''
        };

        await add_appointment(params);
        setOpenConfirmDialog(false);
        handleSearch();
    };

    return (
        <MainLayout>
            <SectionHeader
                title="Solicitar Turno"
                description="Seleccione una especialidad y una obra social para continuar con la solicitud de turno."
            >
                <AppointmentFilters
                    formData={formData}
                    setFormData={setFormData}
                    onSearch={handleSearch}
                />
                <AvailableAppointments
                    schedules={schedules}
                    doctor={formData.doctor}
                    date={formData.date}
                    onSelectSchedule={handleSelectSchedule}
                />
                <GenericConfirmDialog
                    open={openConfirmDialog}
                    title="¿Deseas confirmar este turno?"
                    message={`¿Confirmás el turno con el Dr. ${formData.doctor?.name} ${formData.doctor?.lastName} para el ${formatDateLong(formData.date)} a las ${formatTime(formData.schedule)} hs?`}
                    onConfirm={handleConfirmSchedule}
                    onClose={() => setOpenConfirmDialog(false)}
                />
            </SectionHeader>
        </MainLayout>
    );
};