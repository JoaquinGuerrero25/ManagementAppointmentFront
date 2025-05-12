import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useThemeMode } from "../context/ThemeProvider";

export const AuthLayout = ({ title, subtitle, linkText, linkHref, children }) => {
    const { darkMode } = useThemeMode();

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex'
            }}
        >
            <Box sx={{
                width: '50%',
                display: {
                    xs: 'none',
                    lg: 'flex',
                },
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '0px 4%',
                background: darkMode ? 'var(--grey-900)' : 'var(--grey-50)',
                boxShadow: 'inset 0px -4px 16px rgba(0, 0, 0, 0.1)',
            }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'start',
                        fontSize: '32px',
                        fontWeight: '400',
                        letterSpacing: '0.5px'
                    }}
                >
                    ¡Bienvenido al sistema de gestión de nuestra clínica!
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--grey-500)'
                    }}
                >
                    Por favor, iniciá sesión o creá tu cuenta para acceder a nuestra plataforma y disfrutar de una experiencia de atención más rápida, organizada y personalizada.
                </Typography>
                <div>aca puede ir alguna imagen de obras sociales</div>
            </Box>
            <Box
                sx={{
                    minHeight: '100vh',
                    width: {
                        xs: '100%',
                        lg: '50%'
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: {
                            xs: '100%',
                            md: '440px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: {
                            xs: 'start',
                            lg: 'center'
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            padding: '12px 7%'
                        }}
                    >
                        <div>aca puede ir logo con Nombre</div>
                        <Typography
                            variant="h3"
                            sx={{
                                marginTop: '40px',
                                fontSize: '28px',
                                fontWeight: '600',
                                letterSpacing: '0.8px',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography sx={{ display: 'flex', gap: '4px' }}>
                            {subtitle}
                            <Link to={linkHref} style={{ color: darkMode ? 'var(--primary-main)' : 'var(--primary-dark)' }}>
                                {linkText}
                            </Link>
                        </Typography>
                    </Box>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}