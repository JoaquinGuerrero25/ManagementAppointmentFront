import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { formatDateLong, formatTime } from "../../../utils/viewsUtils";
import { AccessTimeRounded, SearchOffRounded, SearchRounded } from "@mui/icons-material";

export const AvailableAppointments = ({ doctor, date, schedules, onSelectSchedule }) => {
    return (
        <Card
            sx={{
                borderRadius: '16px',
                padding: 'calc(3 * var(--spacing))',
                boxShadow: 'var(--customShadows-card)',
                width: '100%',
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <Typography
                    component={'h2'}
                    sx={{
                        width: '100%',
                        fontWeight: '600',
                        fontSize: '1.3rem',
                        lineHeight: '1.57'
                    }}
                >
                    Turnos Disponibles
                </Typography>
                {schedules.length > 0 && (
                    <Typography component='p' variant="subtitle2" color="textSecondary" sx={{ width: '100%' }}>
                        {doctor ? `Dr. ${doctor.name} ${doctor.lastName} - ` : ''}{formatDateLong(date)}
                    </Typography>
                )}
                <Box sx={{ position: 'relative', minHeight: '300px', width: '100%' }}>
                    {schedules.length > 0 ? (
                        <Box
                            sx={{
                                display: 'grid',
                                gap: 2,
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '1fr',
                                    md: '2fr 2fr',
                                    lg: '1fr 1fr 1fr',
                                },
                            }}
                        >
                            {schedules.map((item) => (
                                <Card key={item.id} variant="outlined" sx={{ p: 2, borderRadius: '8px' }} onClick={() => onSelectSchedule && onSelectSchedule(item)} >
                                    <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 1 }}>
                                        <Box>
                                            <Box display={'flex'} alignItems={'center'} gap={'8px'}>
                                                <AccessTimeRounded />
                                                <Typography variant="subtitle1" fontWeight={500}>
                                                    {formatTime(item)} hs
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" color="textSecondary">
                                                Duración: 1 Hora
                                            </Typography>
                                        </Box>
                                        <Chip sx={{ fontWeight: '600' }} variant="outlined" size="small" label="Consulta" />
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                textAlign: 'center',
                                color: 'text.secondary',
                                p: 2
                            }}
                        >
                            <SearchOffRounded sx={{ fontSize: 48, mb: 1, color: 'text.disabled' }} />
                            <Typography variant="h6" fontWeight={500}>
                                No se encontraron turnos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Selecciona una especialidad, profesional y fecha para ver las opciones disponibles.
                            </Typography>
                        </Box>
                    )}
                </Box>
            </CardContent>
        </Card>
    )
};