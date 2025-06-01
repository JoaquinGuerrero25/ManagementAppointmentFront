import { Box, Button, Typography, Paper } from '@mui/material';

export const WelcomeCard = () => {
    return (
        <Paper
            elevation={3}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: '#1C232C', // fondo oscuro
                color: '#fff',
                p: 4,
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Texto a la izquierda */}
            <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Welcome back 👋
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Jaydon Frankie
                </Typography>
                <Typography variant="body1" color="grey.400" sx={{ maxWidth: 400, mb: 3 }}>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                </Typography>
                <Button variant="contained" sx={{ bgcolor: '#1A73E8', textTransform: 'none' }}>
                    Go now
                </Button>
            </Box>

            {/* Imagen decorativa a la derecha */}
            {/* <Box
                component="img"
                src="/images/welcome-illustration.png" // 🔁 reemplaza por tu ruta
                alt="Welcome Illustration"
                sx={{ width: 250, maxHeight: 250 }}
            /> */}
        </Paper>
    );
};