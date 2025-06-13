import { Box, Dialog, Typography } from "@mui/material";
import { doctorCreateFields, doctorUpdateFields } from '../../../constants/doctorConstant';
import { useEffect, useState } from "react";
import { GenericForm } from "../../../components/Forms/GenericForm";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { buildPlainObjectFromFields } from "../../../utils/formUtils";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { SelectGenericControl } from "../../../components/Controls/Select/SelectGenericControl";
import { useSelector } from "react-redux";
import { get_specialties_thunks } from "../../specialty/specialtyThunks";
import { add_doctor, update_doctor } from "../doctorService";

export const DoctorForm = ({ open, doctor, onSubmit, onClose }) => {
    const specialtiesState = useSelector((state) => state.specialties.specialties);
    const isEditMode = Boolean(doctor);

    const [formData, setFormData] = useState({});
    const [specialties, setSpecialties] = useState([]);

    const handleSpecialties = async () => {
        if (Array.isArray(specialtiesState) && specialtiesState.length > 0) {
            setSpecialties(specialtiesState);
            return;
        }

        const data = await get_specialties_thunks();
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
    }, [doctor, open]);

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
                        {isEditMode ? 'Editar Profesional' : 'Agregar Nuevo Profesional'}
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        {isEditMode
                            ? 'Modifique los datos del profesional.'
                            : 'Complete los datos para agregar un nuevo profesional al sistema.'}
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