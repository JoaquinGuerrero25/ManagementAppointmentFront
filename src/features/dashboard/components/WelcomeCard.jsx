import { Box, Button, Typography, Paper } from '@mui/material';
import imageBanner from '../../../assets/images/dashboard/bannerDashboard.jpg';
import iconClinica from '../../../assets/icons/clinica.png'

export const WelcomeCard = () => {
    return (
        <Paper
            sx={{
                width: '100',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#fff',
                borderRadius: 'calc(2 * var(--shape-borderRadius))',
                overflow: 'hidden',
                position: 'relative',
                backgroundImage: `linear-gradient(to right, rgba(var(--palette-grey-900Channel) / 0.6) 0%, var(--palette-grey-900) 75%), url(${imageBanner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                paddingY: 'calc(5 * var(--spacing))',
                paddingX: 'calc(3 * var(--spacing))',
                boxShadow: 'none',
            }}
        >
            <Box
                sx={{
                    zIndex: 1,
                    height: '100%'
                }}
            >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    👋 Bienvenido de nuevo
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Nombre y Apellido 
                    {/* agregar desde la api el nombre y apellido en el endpoint FindUserClaims */}
                </Typography>
                <Typography variant="body1" color="grey.400" sx={{ maxWidth: 400, mb: 3 }}>
                    Tu espacio personal para gestionar citas, revisar datos importantes y mantenerte conectado con la clínica.
                </Typography>
            </Box>
            <img src={iconClinica} alt="Clinica" height='180px' width='180px' />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    zIndex: 0,
                }}
            />
        </Paper>
    );
};