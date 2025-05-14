import { useEffect, useState } from "react";
import { delete_specialty, get_specialties } from "../../../api/specialtyService";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { specialtyModel } from "../../../constants/specialtyConstant";
import { MainLayout } from "../../../layouts/MainLayout";
import { Box, Typography } from "@mui/material";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { Add, DeleteRounded, EditRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../../../context/ThemeProvider";
import { GenericConfirmDialog } from "../../../components/Dialog/GenericConfirmDialog";

export const Specialty = () => {
    const { darkMode } = useThemeMode();
    const navigate = useNavigate();

    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [specialtySelect, setSpecialtySelect] = useState(null);
    const [specialties, setSpecialties] = useState([]);

    const handleSpecialty = async () => {
        const data = await get_specialties();
        setSpecialties(data);
    };

    const handleOpenDialogSpecialty = (specialty) => {
        setOpenDialogDelete(true);
        setSpecialtySelect(specialty);
    };

    const handleCloseDialogSpecialty = () => {
        setOpenDialogDelete(false);
        setSpecialtySelect(null);
    };

    const confirmDelete = async () => {
        if (specialtySelect) {
            await delete_specialty(specialtySelect.id);
            handleSpecialty();
        }
        handleCloseDialogSpecialty();
    };

    // Accion editar
    const actionEdit = {
        Icon: EditRounded,
        Label: 'Editar',
        Action: (specialty) => {
            navigate(`/administrador/especialidades/editar/${specialty.id}`);
            handleSpecialty(); // vuelvo a obtener las especialidades
        }
    }

    // Accion eliminar
    const actionDelete = {
        Icon: DeleteRounded,
        Label: 'Eliminar',
        Action: async (specialty) => { handleOpenDialogSpecialty(specialty) }
    }

    useEffect(() => {
        handleSpecialty();
    }, []);

    return (
        <MainLayout>
            <Box
                width='100%'
                sx={{
                    paddingBottom: '2rem',
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: {
                            xs: "start",
                            md: "center",
                        },
                        justifyContent: "space-between",
                        width: "95%",
                        gap: "16px",
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: "1.7rem",
                            fontWeight: 500,
                            color: darkMode ? "var(--grey-100)" : "var(--grey-900)",
                        }}
                    >
                        Especialidades
                    </Typography>
                    <ButtonGenericControl label="Agregar" icon={<Add fontSize="large" />} iconPosition="start" action={() => navigate("/administrador/especialidades/crear")} />
                </Box>
                <GenericTable columns={specialtyModel} rows={specialties} filterKeys={['name', 'description']} actions={[actionEdit, actionDelete]} />
            </Box>

            {/* componente de confirmacion */}
            <GenericConfirmDialog
                open={openDialogDelete}
                onClose={handleCloseDialogSpecialty}
                onConfirm={confirmDelete}
                title="Confirmar eliminación"
                message={`¿Estás seguro que deseas eliminar la especialidad "${specialtySelect?.name}"? Esta acción no se puede deshacer.`}
                confirmLabel="Eliminar"
            />
        </MainLayout>
    );
};