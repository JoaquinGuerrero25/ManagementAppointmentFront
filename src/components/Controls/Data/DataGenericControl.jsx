import { Card, CardActionArea, CardContent, CardHeader, Typography } from "@mui/material";
import { useThemeMode } from "../../../context/ThemeProvider";

export const DataGenericControl = ({ icon, label, data, width = '100%', labelButton, actionButton }) => {
    const { darkMode } = useThemeMode();
    return (
        <Card
            // variant="outlined"
            elevation={2}
            sx={{
                width: width,
                borderRadius: '12px',
                padding: 1,
                background: darkMode ? '#161b22' : 'ffffff'
            }}
        >
            <CardHeader avatar={icon} sx={{ height: '52px' }} />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    padding: 0,
                    paddingX: 2
                }}
            >
                <Typography
                    component='h4'
                    sx={{
                        fontSize: '24px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                    }}
                >
                    {label}
                </Typography>
                <Typography
                    component='p'
                    sx={{
                        fontSize: '32px',
                        fontWeight: '800',
                        textAlign: 'end'
                    }}
                >
                    {data}
                </Typography>
            </CardContent>
            <CardActionArea
                disabled={!labelButton}
                onClick={actionButton}
                sx={{
                    height: '40px',
                    paddingX: 2,
                    color: 'var(--primary-main)',
                    fontWeight: '500',
                    fontSize: '14px'
                }}
            >
                {labelButton}
            </CardActionArea>
        </Card>
    );
};