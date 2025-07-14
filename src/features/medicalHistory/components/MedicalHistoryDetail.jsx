import { Box, Grid, IconButton, Typography } from "@mui/material";
import { medicalHistoryModelsView } from "../../../constants/medicalHistoryConstant";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { CloseRounded } from "@mui/icons-material";

export const MedicalHistoryDetail = ({ medicalHistorySelected, setOpenDialogDetail }) => {
    const fullRowKeys = ["diagnosis", "treatment", "notes"];

    return (
        <Box p={3}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'end'}>
                <IconButton onClick={() => setOpenDialogDetail(false)}>
                    <CloseRounded />
                </IconButton>
            </Box>
            {medicalHistoryModelsView.map(({ key, label }) => (
                <Box padding='8px 0px'>
                    <Typography variant="subtitle2" fontWeight={600} color="text.primary">
                        {label}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {medicalHistorySelected?.[key] ?? "-"}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};