import { Box, Card, CardContent, Typography } from "@mui/material";
import { useThemeMode } from "../../../context/ThemeProvider";

export const DataCard = ({ labelCard = '.', data = 0, icon }) => {
    const { darkMode } = useThemeMode();

    return (
        <Card
            sx={{
                borderRadius: '16px',
                color: darkMode ? 'var(--palette-text-primary)' : 'var(--palette-text-primary-light)',
                padding: 'calc(3 * var(--spacing))',
                boxShadow: 'var(--customShadows-card)',
                height: '150px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <CardContent
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0',
                    paddingBottom: '0 !important'
                }}
            >
                <Box>
                    <Typography
                        component={'h5'}
                        sx={{
                            fontWeight: '600',
                            fontSize: '0.875rem',
                            lineHeight: '1.57'
                        }}
                    >
                        {labelCard}
                    </Typography>
                    <Typography
                        component={'p'}
                        sx={{
                            marginTop: 'calc(1.5 * var(--spacing))',
                            marginBottom: 'var(--spacing)',
                            fontFamily: `Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
                            fontWeight: '700',
                            fontSize: '1.5rem',
                            lineHeight: '1.5',
                        }}
                    >
                        {data}
                    </Typography>
                </Box>
                {icon}
            </CardContent>
        </Card>
    );
};