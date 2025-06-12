import { Box, Dialog, Typography } from "@mui/material";
import { SelectGenericControl } from "../../../components/Controls/Select/SelectGenericControl";
import { useEffect, useState } from "react";
import { get_patients } from "../../patient/patientService";
import { get_appointment_by_doctor } from "../../appointments/appointmnetService";
import { useSelector } from "react-redux";
import { GenericForm } from "../../../components/Forms/GenericForm";
import { buildPlainObjectFromFields } from "../../../utils/formUtils";
import { medicalHistoryCreateFields } from "../../../constants/medicalHistoryConstant";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { add_medical_history } from "../medicalHistoryService";

export const MedicalHistoryForm = ({ open, onSubmit, onClose }) => {
    const user = useSelector((state) => state.auth.user);

    const [formData, setFormData] = useState({});
    const [patients, setPatients] = useState([]);
    const [appointments, setAppoitments] = useState([]);

    const handlePatients = async () => {
        const data = await get_patients();
        setPatients(data);
    };

    const handleAppointments = async () => {
        const data = await get_appointment_by_doctor(user?.id);
        setAppoitments(data);
    };

    useEffect(() => {
        handlePatients();
        handleAppointments();
    }, []);

    useEffect(() => {
        const initial = buildPlainObjectFromFields(medicalHistoryCreateFields, {});
        setFormData(initial);
    }, [open]);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        formData.doctorId = Number(user?.id);
        
        await add_medical_history(formData);

        if (onSubmit) onSubmit();
    };

    return (
        <Dialog
            open={open}
            fullWidth
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '12px',
                        backgroundImage: 'none',
                    }
                }
            }}
        >
            <Box p={3}>
                <Box mb={2} display={'flex'} flexDirection={'column'} gap={1}>
                    <Typography variant="h5" component='h3' sx={{ fontWeight: '500', letterSpacing: '0.3px' }}>
                        Registro de Historial Médico
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        Completa el formulario para registrar un nuevo historial médico del paciente.
                    </Typography>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={'16px'}>
                    <SelectGenericControl
                        label={'Paciente'}
                        name={'patientId'}
                        value={formData?.patientId}
                        options={patients}
                        optionLabelKey="name"
                        optionValueKey='id'
                        onChange={handleChange}
                    />
                    <SelectGenericControl
                        label={'Turno'}
                        name={'appointmentId'}
                        value={formData?.appointmentId}
                        options={appointments}
                        optionLabelKey="date"
                        optionValueKey='id'
                        onChange={handleChange}
                    />
                    <GenericForm
                        fields={medicalHistoryCreateFields}
                        value={formData}
                        onChange={handleChange}
                    />
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'end'}>
                        <ButtonTextControl label='Cancelar' action={onClose} />
                        <ButtonGenericControl label='Confirmar' action={handleSubmit} />
                    </Box>
                </Box>

            </Box>
        </Dialog>
    );
};