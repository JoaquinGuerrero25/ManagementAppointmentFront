import { Button } from "@mui/material";

export const ButtonGenericControl = ({ label, icon, iconPosition = "start", action, width = "auto", height = "auto", variant = "contained", disabled = false, }) => {
    const startIcon = iconPosition === "start" ? icon : null;
    const endIcon = iconPosition === "end" ? icon : null;

    return (
        <Button
            onClick={action}
            startIcon={startIcon}
            endIcon={endIcon}
            sx={{
                width,
                height,
                textTransform: "none",
                borderRadius: '8px',
                letterSpacing: '0.5px',
            }}
            variant={variant}
            disabled={disabled}
        >
            {label}
        </Button>
    );
};