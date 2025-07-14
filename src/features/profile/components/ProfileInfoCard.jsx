import { Box, Card, Grid, Typography } from "@mui/material";

export const ProfileInfoCard = ({ model, value }) => {
    const formatValue = (val) => {
        if (typeof val === 'boolean') return val ? 'Activo' : 'Inactivo';
        if (val === null || val === undefined) return '—';
        return val;
    };

    return (
        <Card
            sx={{
                p: 3,
                borderRadius: '16px',
                boxShadow: 'var(--customShadows-card)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                gap: '16px',
            }}
        >
            <Box width={'100%'}>
                <Typography variant="subtitle1" width='100%' fontWeight={600} fontSize={'1.0625rem'} lineHeight={'1.56'} textAlign={'start'}>
                    Información Personal
                </Typography>
                <Typography variant="body2" width='100%' fontWeight='400' fontSize='0.875rem' color="text.secondary" margin='4px 0px 0px' textAlign='start'>
                    Tus datos personales registrados en la clínica.
                </Typography>
            </Box>
            <Grid container spacing={'16px'} width={'100%'}>
                {model?.map(({ key, label }) => (
                    <Grid item size={{ xs: 12, md: 6 }} key={key}>
                        <Box
                            display="flex"
                            flexDirection='column'
                            justifyContent="center"
                            alignItems='start'
                            width="100%"
                            textAlign={'center'}
                            padding="4px 0"
                        >
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                color="text.secondary"
                            >
                                {label}
                            </Typography>
                            <Typography variant="body2" fontWeight={400}>
                                {formatValue(value[key])}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

