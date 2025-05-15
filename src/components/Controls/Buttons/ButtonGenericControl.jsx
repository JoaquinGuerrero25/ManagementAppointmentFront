import { Button } from "@mui/material";

export const ButtonGenericControl = ({ label, icon, iconPosition = "start", action, width = "auto", height = "auto", variant = "contained", color = "primary", disabled = false, }) => {
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
                fontSize: '16px',
                textTransform: "none",
                borderRadius: '8px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                background: 'var(--gradient-blue-button)',
                color: 'white',
                '&:hover': {
                    background: 'var(--gradient-blue-button-hover)',
                },
            }}
            variant={variant}
            color={color}
            disabled={disabled}
        >
            {label}
        </Button>
    );
};