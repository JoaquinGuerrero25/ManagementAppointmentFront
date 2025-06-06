import { Box, Dialog, Typography } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { medicalHistoryModels } from "../../../constants/medicalHistoryConstant";
import { useEffect, useState } from "react";
import { get_medical_history_patient } from "../medicalHistoryService";
import { useSelector } from "react-redux";
import { VisibilityRounded } from "@mui/icons-material";
import { MedicalHistoryDetail } from "../components/MedicalHistoryDetail";
import { SectionHeader } from "../../../components/SectionHeader";

export const MedicalHistoryPatientPage = () => {
    const user = useSelector((state) => state.auth.user);

    const [medicalHistory, setMedicalHistory] = useState([]);
    const [medicalHistorySelected, setMedicalHistorySelected] = useState(null);
    const [openDialogDetail, setOpenDialogDetail] = useState(false);

    const handleMedicalHistory = async () => {
        const data = await get_medical_history_patient(user?.id);
        setMedicalHistory(data);
    };

    useEffect(() => {
        handleMedicalHistory();
    }, []);

    const actionViewDetail = {
        Icon: VisibilityRounded,
        Label: 'Ver Detalle',
        Action: (row) => {
            setMedicalHistorySelected(row);
            setOpenDialogDetail(true);
        },
    };

    return (
        <MainLayout>
            <SectionHeader
                title="Historial Médico"
                description="Consultá tus antecedentes y registros médicos personales."
            >
                <GenericTable
                    columns={medicalHistoryModels}
                    rows={medicalHistory}
                    filterKeys={['doctorName', 'date']}
                    actions={[actionViewDetail]}
                />
            </SectionHeader>

            <Dialog
                open={openDialogDetail}
                fullWidth
                slotProps={
                    {
                        paper:
                        {
                            sx: {
                                borderRadius: '16px',
                            }
                        }
                    }
                }
            >
                <MedicalHistoryDetail
                    medicalHistorySelected={medicalHistorySelected}
                    setOpenDialogDetail={setOpenDialogDetail}
                />
            </Dialog>
        </MainLayout>
    );
};