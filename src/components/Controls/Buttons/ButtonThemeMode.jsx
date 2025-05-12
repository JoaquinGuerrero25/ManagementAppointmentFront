import { Button } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "../../../context/ThemeProvider";

export const ButtonThemeMode = () => {
    const { darkMode, toggleMode } = useThemeMode();

    return (
        <Button
            onClick={toggleMode}
            startIcon={darkMode ? <Brightness7 /> : <Brightness4 />}
            sx={{ 
                m: 2, 
                background: 'none', 
                border: darkMode ? '1px solid var(--grey-300)' : '1px solid var(--grey-900)', 
                color: darkMode ? '1px solid var(--grey-300)' : '1px solid var(--grey-900)',
                textTransform: 'none',
            }}
            variant="contained"
            color="primary"
        >
            {darkMode ? "Modo claro" : "Modo oscuro"}
        </Button>
    );
};