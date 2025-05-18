import { Box, Icon, Typography } from "@mui/material";
import { ButtonTextControl } from "../Buttons/ButtonTextControl";
import { useThemeMode } from "../../../context/ThemeProvider";

export const DataGenericControl = ({ icon, label, data, height = 'auto', width = 'auto', labelButton, actionButton }) => {
    const { darkMode } = useThemeMode();

    return (
        <Box
            sx={{
                border: 1,
            }}
        >

        </Box>
    );
};