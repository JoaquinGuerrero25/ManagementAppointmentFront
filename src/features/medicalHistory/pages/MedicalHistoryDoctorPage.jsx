import { useEffect, useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { MainLayout } from "../../../layouts/MainLayout";
import { get_medical_history_doctor } from "../medicalHistoryService";
import { useSelector } from "react-redux";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { medicalHistoryModels } from "../../../constants/medicalHistoryConstant";
import { MedicalHistoryDetail } from "../components/MedicalHistoryDetail";
import { VisibilityRounded } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { MedicalHistoryForm } from "../components/MedicalHistoryForm";

export const MedicalHistoryDoctorPage = () => {
    const user = useSelector((state) => state.auth.user);

    const [medicalHistory, setMedicalHistory] = useState([]);
    const [medicalHistorySelected, setMedicalHistorySelected] = useState(null);
    const [openDialogDetail, setOpenDialogDetail] = useState(false);
    const [openDialogCreate, setOpenDialogCreate] = useState(false);


    const handleMedicalHistory = async () => {
        const data = await get_medical_history_doctor(user?.id);
        setMedicalHistory(data);
    };

    const handleCreateMedicalHistory = async () => {
        handleMedicalHistory();
        setOpenDialogCreate(false);
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
                buttonLabel={'Agregar'}
                onButtonClick={() => setOpenDialogCreate(true)}
            >
                <GenericTable
                    columns={medicalHistoryModels}
                    rows={medicalHistory}
                    filterKeys={['patient', 'date']}
                    actions={[actionViewDetail]}
                />
            </SectionHeader>

            <MedicalHistoryForm
                open={openDialogCreate}
                onSubmit={handleCreateMedicalHistory}
                onClose={() => setOpenDialogCreate(false)}
            />

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