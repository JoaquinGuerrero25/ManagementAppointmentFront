import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackRounded } from "@mui/icons-material";
import { GenericForm } from "../../components/Forms/GenericForm";
import { specialtyFields } from "../../constants/specialtyConstant";
import { add_specialty } from "../../api/specialtyService";
import { useThemeMode } from "../../context/ThemeProvider";

export const SpecialtyCreate = () => {
    const navigate = useNavigate();
    const { darkMode } = useThemeMode();

    const handleSubmit = async (formData) => {
        await add_specialty(formData);
        navigate('/administrador/especialidades');
    };

    return (
        <MainLayout>
            <Box
                width='100%'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <Link to='/administrador/especialidades' className="flex flex-row gap-2">
                    <ArrowBackRounded />
                    <Typography component='p'>
                        especialidades
                    </Typography>
                </Link>
                <Typography
                    component='h2'
                    sx={{
                        fontSize: 'clamp(1.5rem, 1.5vw, 2.4rem)',
                    }}
                >
                    Crear especialidad
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            py: 4,
                            background: 'var(--grey-custom)',
                            borderRadius: '20px',
                            maxWidth: '800px',
                            border: darkMode ? '1px solid var(--grey-900)' : '1px solid',
                        }}
                    >
                        <GenericForm
                            fields={specialtyFields}
                            buttonLabel={'Crear'}
                            buttonType='submit'
                            buttonCancel='/administrador/especialidades'
                            onSubmit={handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    );
};