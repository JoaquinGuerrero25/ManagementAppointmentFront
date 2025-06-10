import { Box, Card, CardContent, Typography } from "@mui/material";
import { useThemeMode } from "../../../context/ThemeProvider";
import { KeyboardDoubleArrowDownRounded, KeyboardDoubleArrowUpRounded, PersonRounded } from "@mui/icons-material";
import { RandomBarChart } from "./RandomBarChart";

export const InfoCard = ({ labelCard = '.', data = 0, porcentage = 0, labelPorcentage = 'Últimos 30 días' }) => {
    const { darkMode } = useThemeMode();

    return (
        <Card
            sx={{
                borderRadius: '16px',
                color: darkMode ? 'var(--palette-text-primary)' : 'var(--palette-text-primary-light)',
                padding: 'calc(3 * var(--spacing))',
                boxShadow: 'var(--customShadows-card)',
                height: '150px'
            }}
        >
            <CardContent
                sx={{
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
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        gap={'calc(0.5 * var(--spacing))'}
                        alignItems={'center'}
                    >
                        {
                            !isNaN(Number(porcentage?.toString().trim())) && Number(porcentage.toString().trim()) >= 0 ? (
                                <KeyboardDoubleArrowUpRounded sx={{ color: 'green' }} />
                            ) : (
                                <KeyboardDoubleArrowDownRounded sx={{ color: 'red' }} />
                            )
                        }
                        <Typography
                            component={'p'}
                            sx={{
                                fontWeight: '600',
                                fontSize: '0.875rem',
                                lineHeight: '1.57'
                            }}
                        >
                            {porcentage}
                        </Typography>
                        <Typography
                            component={'p'}
                            sx={{
                                fontWeight: '400',
                                fontSize: '0.875rem',
                                lineHeight: '1.57',
                                color: darkMode ? 'var(--palette-text-secondary)' : 'var(--palette-text-secondary-light)'
                            }}
                        >
                            {labelPorcentage}
                        </Typography>
                    </Box>
                </Box>
                <RandomBarChart value={Number(porcentage)} />
            </CardContent>
        </Card>
    );
};