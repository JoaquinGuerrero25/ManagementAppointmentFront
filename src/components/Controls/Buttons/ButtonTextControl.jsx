import { Button } from "@mui/material"

export const ButtonTextControl = ({ label, action }) => {
    return (
        <Button
            variant="text"
            onClick={action}
            sx={{
                color: 'var(--primary-main)',
                fontWeight: '500',
                textTransform: 'none',
                letterSpacing: '0.5px',
                margin: '0px 12px'
            }}
        >
            {label}
        </Button>
    );
};