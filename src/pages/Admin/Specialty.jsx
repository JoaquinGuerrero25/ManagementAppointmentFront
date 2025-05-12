import { useEffect, useState } from "react";
import { get_specialties } from "../../api/specialtyService";
import { GenericTable } from "../../components/Tables/GenericTable";
import { specialtyModel } from "../../constants/specialtyConstant";
import { MainLayout } from "../../layouts/MainLayout";
import { Box, Typography } from "@mui/material";
import { ButtonGenericControl } from "../../components/Controls/Buttons/ButtonGenericControl";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useThemeMode } from "../../context/ThemeProvider";

export const Specialty = () => {
    const { darkMode } = useThemeMode();
    const navigate = useNavigate();

    const [specialties, setSpecialties] = useState([]);

    const handleSpecialty = async () => {
        const response = await get_specialties();
        setSpecialties(response);
    };

    useEffect(() => {
        handleSpecialty();
    }, []);

    return (
        <MainLayout>
            <Box
                sx={{
                    width: "100%",
                    paddingBottom: '2rem',
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "20px",
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
                <GenericTable columns={specialtyModel} rows={specialties} filterKeys={['name', 'description']} />
            </Box>
        </MainLayout>
    );
};