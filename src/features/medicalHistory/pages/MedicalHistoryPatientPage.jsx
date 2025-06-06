import { Box, Dialog, Typography } from "@mui/material";
import { MainLayout } from "../../../layouts/MainLayout";
import { GenericTable } from "../../../components/Tables/GenericTable";
import { medicalHistoryModels } from "../../../constants/medicalHistoryConstant";
import { useEffect, useState } from "react";
import { get_medical_history_patient } from "../medicalHistoryService";
import { useSelector } from "react-redux";
import { VisibilityRounded } from "@mui/icons-material";
import { MedicalHistoryDetail } from "../components/MedicalHistoryDetail";

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
            <Box
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'start'}
                gap={'calc(2 * var(--spacing))'}
            >
                <Box
                    width={'100%'}
                    display='flex'
                    justifyContent='space-between'
                    gap='calc(2 * var(--spacing))'
                    sx={{
                        alignItems: { xs: 'start', md: 'center' },
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Box display='flex' flexDirection='column' alignItems='start' justifyContent='center' gap='var(--spacing)'>
                        <Typography variant="h2" component='h2' sx={{ fontSize: '28px', fontWeight: '700' }}>
                            Historial Médico
                        </Typography>
                        <Typography component='p' variant="subtitle1" color="textSecondary">
                            Consultá tus antecedentes y registros médicos personales.
                        </Typography>
                    </Box>
                </Box>
                <GenericTable
                    columns={medicalHistoryModels}
                    rows={medicalHistory}
                    filterKeys={['doctorName', 'date']}
                    actions={[actionViewDetail]}
                />
            </Box>

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