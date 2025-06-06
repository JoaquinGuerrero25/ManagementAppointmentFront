import { useEffect, useState } from "react";
import { buildPlainObjectFromFields } from "../../../utils/formUtils";
import { adminUpdateFields } from "../../../constants/AdminConstant";
import { Box, Dialog, Typography } from "@mui/material";
import { update_admin } from "../../../api/services/adminService";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { GenericForm } from "../../../components/Forms/GenericForm";

export const AdminForm = ({ open, admin, onSubmit, onClose }) => {
    const isEditMode = Boolean(admin);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (open) {
            const initial = buildPlainObjectFromFields(
                adminUpdateFields,
                admin || {}
            );
            setFormData(initial);
        }
    }, [admin, open]);

    const handleChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        await update_admin(admin?.id, formData);
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
                        Editar
                    </Typography>
                    <Typography component='p' variant="subtitle1" color="textSecondary">
                        Modifique los datos.
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'16px'}>
                    <GenericForm
                        fields={adminUpdateFields}
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
    )
};