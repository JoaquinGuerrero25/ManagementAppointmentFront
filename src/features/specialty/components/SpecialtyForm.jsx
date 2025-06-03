import { Box, Dialog, Typography } from "@mui/material";
import { GenericForm } from "../../../components/Forms/GenericForm";
import { specialtyFields } from "../../../constants/specialtyConstant";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { buildPlainObjectFromFields } from "../../../utils/formUtils";
import { useEffect, useState } from "react";
import { add_specialty, update_specialty } from "../specialtyService";

export const SpecialtyForm = ({ open, specialty, onSubmit, onClose }) => {
    const isEditMode = Boolean(specialty);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (open) {
            const initial = buildPlainObjectFromFields(
                specialtyFields,
                specialty || {},
            );
            setFormData(initial);
        }
    }, [specialty, open]);


    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (isEditMode) {
            await update_specialty(specialty.id, formData);
        } else {
            await add_specialty(formData);
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
                        {isEditMode ? 'Editar Especialidad' : 'Agregar Nueva Especialidad'}
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        {isEditMode
                            ? 'Modifique los datos de la especialidad médica.'
                            : 'Complete los datos para agregar una nueva especialidad médica.'}
                    </Typography>
                </Box>
                <Box>

                    <GenericForm
                        fields={specialtyFields}
                        value={formData}
                        onChange={handleChange}
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