import { Box, Icon, Typography } from "@mui/material";
import { ButtonTextControl } from "../Buttons/ButtonTextControl";
import { useThemeMode } from "../../../context/ThemeProvider";

export const DataGenericControl = ({ icon, label, data, height = 'auto', width = 'auto', labelButton, actionButton }) => {
    const { darkMode } = useThemeMode();

    return (
        <Box
            sx={{
                border: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                minHeight: '100px',
                minWidth: '140px',
                height,
                width,
                borderRadius: '16px',
                background: darkMode ? 'black' : 'var(--grey-50)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 2,
                    padding: 2,
                }}
            >
                <Icon
                    sx={{
                        width: '15%',
                        height: '15%',
                        aspectRatio: '1 / 1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '50%',
                        background: darkMode ? 'none' : 'white',
                        fontSize: 'clamp(16px, 4vw, 32px)'
                    }}
                >
                    {icon}
                </Icon>
                <Typography
                    component={'h3'}
                    sx={{
                        fontSize: 'clamp(16px, 3vw, 20px)',
                        fontWeight: 300,
                        letterSpacing: '0.5px',
                        color: darkMode ? 'var(--grey-300)' : 'var(--grey-500)',
                    }}
                >
                    {label}
                </Typography>
            </Box>
            <Box>
                <Typography
                    component={'p'}
                    sx={{
                        textAlign: 'end',
                        fontSize: 'clamp(3rem, 6vw, 4rem)',
                        padding: 2,
                    }}
                >
                    {data}
                </Typography>
            </Box>
            {labelButton && actionButton && (
                <Box
                    sx={{
                        borderTop: darkMode ? '1px solid var(--grey-900)' : '1px solid var(--grey-300)',
                        paddingY: 1,
                    }}
                >
                    <ButtonTextControl label={labelButton} action={actionButton} />
                </Box>
            )}
        </Box>
    );
};