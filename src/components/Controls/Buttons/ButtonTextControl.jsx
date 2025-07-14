import { Button } from "@mui/material"
import { useThemeMode } from "../../../context/ThemeProvider";

export const ButtonTextControl = ({ label, action }) => {
    const { darkMode } = useThemeMode();

    return (
        <Button
            variant="text"
            onClick={action}
            sx={{
                color: darkMode ? 'var(--palette-primary-light)' : 'var(--palette-primary-main)',
                textTransform: 'none',
                letterSpacing: '0.5px',
                background: 'none',
                margin: '0px 12px'
            }}
        >
            {label}
        </Button>
    );
};