import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { MainLayout } from "../../../layouts/MainLayout";
import { GenericForm } from "../../../components/Forms/GenericForm";
import { specialtyFields } from "../../../constants/specialtyConstant";
import { add_specialty, get_specialty_by_id } from "../../../api/specialtyService";
import { useThemeMode } from "../../../context/ThemeProvider";

export const SpecialtyFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { darkMode } = useThemeMode();

    const isEditMode = !!id;

    const [fields, setFields] = useState(specialtyFields);

    const mapFieldsWithValues = (template, values) =>
        Object.fromEntries(Object.entries(template).map(([key, config]) => [
            key,
            { ...config, value: values[key] || '' },
        ]));
        

    useEffect(() => {
        if (isEditMode) {
            const fetchData = async () => {
                const data = await get_specialty_by_id(id);
                const updatedFields = mapFieldsWithValues(specialtyFields, data);
                setFields(updatedFields);
            };
            fetchData();
        }
    }, [id]);

    const handleSubmit = async (formData) => {
        if (isEditMode) {
            // await update_specialty(id, formData); no esta en la api
        } else {
            await add_specialty(formData);
        }
        navigate('/administrador/especialidades');
    };

    return (
        <MainLayout>
            <Box width='100%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <Box sx={{ width: '95%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Link to='/administrador/especialidades' className="flex flex-row gap-2">
                        <ArrowBackRounded />
                        <Typography component='p'>especialidades</Typography>
                    </Link>
                    <Typography component='h2' sx={{ fontSize: 'clamp(1.5rem, 1.5vw, 2.4rem)' }}>
                        {isEditMode ? 'Editar especialidad' : 'Crear especialidad'}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            width: '100%',
                            py: 4,
                            // background: darkMode ? 'var(--grey-custom)' : 'var(--grey-50)',
                            borderRadius: '20px',
                            maxWidth: '95%',
                            border: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                        }}
                    >
                        <GenericForm
                            fields={fields}
                            buttonLabel={isEditMode ? 'Guardar cambios' : 'Crear'}
                            buttonCancel='/administrador/especialidades'
                            onSubmit={handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    );
};