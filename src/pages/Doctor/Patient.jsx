import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../layouts/MainLayout";
import { useThemeMode } from "../../context/ThemeProvider";
import { patientModel } from "../../constants/patientConstant";
import { get_patients } from "../../api/patientService";
import { useEffect, useState } from "react";
import { GenericTable } from "../../components/Tables/GenericTable";

export const Patient = () => {
    const { darkMode } = useThemeMode();

    const [patients, setPatients] = useState([]);

    const handlePatients = async () => {
        const data = await get_patients();
        setPatients(data);
    };

    useEffect(() => {
        handlePatients();
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
                        Pacientes
                    </Typography>
                </Box>
                <GenericTable columns={patientModel} rows={patients} filterKeys={['name']} />
            </Box>
        </MainLayout>
    );
};