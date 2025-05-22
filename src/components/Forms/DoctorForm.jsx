import { Box, Dialog, Typography } from "@mui/material";
import { doctorCreateFields, doctorUpdateFields } from '../../constants/doctorConstant';
import { useEffect, useState } from "react";
import { GenericForm } from "./GenericForm";
import { ButtonTextControl } from "../Controls/Buttons/ButtonTextControl";
import { buildPlainObjectFromFields } from "../../utils/formUtils";
import { ButtonGenericControl } from "../Controls/Buttons/ButtonGenericControl";
import { SelectGenericControl } from "../Controls/Select/SelectGenericControl";
import { get_specialties } from "../../api/specialtyService";
import { add_doctor, update_doctor } from "../../api/doctorService";

export const DoctorForm = ({ open, doctor, onSubmit, onClose }) => {
    const isEditMode = Boolean(doctor);
    const [formData, setFormData] = useState({});
    const [specialties, setSpecialties] = useState([]);

    const handleSpecialties = async () => {
        const data = await get_specialties();
        setSpecialties(data);
    };

    useEffect(() => {
        handleSpecialties();
    }, []);

    useEffect(() => {
        const initial = buildPlainObjectFromFields(
            isEditMode ? doctorUpdateFields : doctorCreateFields,
            doctor || {}
        );
        setFormData(initial);
    }, [doctor]);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (isEditMode) {
            await update_doctor(doctor?.id, formData);
        } else {
            await add_doctor(formData);
        }
        if (onSubmit) onSubmit();
    }

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
                        {isEditMode ? 'Editar Doctor' : 'Agregar Nuevo Doctor'}
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        {isEditMode
                            ? 'Modifique los datos del doctor.'
                            : 'Complete los datos para agregar un nuevo doctor al sistema.'}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'16px'}>
                    <GenericForm
                        fields={isEditMode ? doctorUpdateFields : doctorCreateFields}
                        value={formData}
                        onChange={handleChange}
                    />
                    <SelectGenericControl
                        label='Especialidad'
                        name='specialtyId'
                        onChange={handleChange}
                        required={true}
                        options={specialties}
                        value={formData.specialtyId}
                        optionLabelKey="name"
                        optionValueKey="id"
                    />
                    <Box pt={2} display={'flex'} flexDirection={'row'} justifyContent={'end'}>
                        <ButtonTextControl label='Cancelar' action={onClose} />
                        <ButtonGenericControl label='Confirmar' action={handleSubmit} />
                    </Box>
                </Box>
            </Box>
        </Dialog >
    );
};