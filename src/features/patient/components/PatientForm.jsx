import { Box, Dialog, Typography } from "@mui/material";
import { GenericForm } from "../../../components/Forms/GenericForm";
import { useEffect, useState } from "react";
import { buildPlainObjectFromFields } from "../../../utils/formUtils";
import { patientCreateFields, patientUpdateFields } from "../../../constants/patientConstant";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { add_patient, update_patient } from "../patientService";

export const PatientForm = ({ open, patient, onSubmit, onClose }) => {
    const isEditMode = Boolean(patient);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (open) {
            const initial = buildPlainObjectFromFields(
                isEditMode ? patientUpdateFields : patientCreateFields,
                patient || {}
            );
            setFormData(initial);
        }
    }, [patient, open]);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (isEditMode) {
            await update_patient(patient?.id, formData);
        } else {
            await add_patient(formData);
        }
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
                        {isEditMode ? 'Editar Paciente' : 'Agregar Nuevo Paciente'}
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        {isEditMode
                            ? 'Modifique los datos del paciente.'
                            : 'Complete los datos para agregar un nuevo paciente al sistema.'}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'16px'}>
                    <GenericForm
                        fields={isEditMode ? patientUpdateFields : patientCreateFields}
                        value={formData}
                        onChange={handleChange}
                    />
                    <Box pt={2} display={'flex'} flexDirection={'row'} justifyContent={'end'}>
                        <ButtonTextControl label='Cancelar' action={onClose} />
                        <ButtonGenericControl label='Confirmar' action={handleSubmit} />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
}