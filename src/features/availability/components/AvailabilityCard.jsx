import { Box, Card, CardContent, Chip, Divider, Typography } from "@mui/material";
import { useThemeMode } from "../../../context/ThemeProvider";
import { formatTime } from "../../../utils/viewsUtils";
import { InputTimeControl } from "../../../components/Controls/Inputs/InputTimeControl";
import { useEffect, useState } from "react";
import { ButtonGenericControl } from "../../../components/Controls/Buttons/ButtonGenericControl";
import { ButtonTextControl } from "../../../components/Controls/Buttons/ButtonTextControl";
import { add_availability, update_availability } from "../availabilityService";

export const AvailabilityCard = ({ day, availability, userId, onRefresh }) => {
    const { darkMode } = useThemeMode();

    const [startTime, setStartTime] = useState(availability?.startTime || "");
    const [endTime, setEndTime] = useState(availability?.endTime || "");
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStartTime(availability?.startTime || "");
        setEndTime(availability?.endTime || "");
    }, [availability]);

    const handleCancel = () => {
        setStartTime(availability?.startTime || "");
        setEndTime(availability?.endTime || "");
        setEditMode(false);
    };

    const handleConfirm = async () => {
        if (availability) {
            const availabilityTemp = JSON.parse(JSON.stringify(availability));
            availabilityTemp.startTime = startTime;
            availabilityTemp.endTime = endTime;

            await update_availability(availabilityTemp.id, availabilityTemp);
        } else {
            const data = {
                doctorId: userId,
                dayOfWeek: day?.value,
                startTime: startTime,
                endTime: endTime,
            }

            await add_availability(data);
        }

        setEditMode(false);

        if (onRefresh) onRefresh();
    };

    return (
        <Card
            sx={{
                borderRadius: '16px',
                color: darkMode ? 'var(--palette-text-primary)' : 'var(--palette-text-primary-light)',
                padding: 'calc(3 * var(--spacing))',
                boxShadow: 'var(--customShadows-card)',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    padding: '0',
                    paddingBottom: '0 !important'
                }}
            >
                <Box display={'flex'} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} gap={'16px'}>
                    <Box display={'flex'} width={'80%'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} gap={'16px'}>
                        <Typography component={'h3'} sx={{ fontWeight: '600', fontSize: '1.5rem' }}>
                            {day?.label}
                        </Typography>
                        <Chip
                            size="small"
                            sx={{ minWidth: '60px', fontWeight: '600', margin: 0 }}
                            variant="outlined"
                            label={
                                availability?.startTime && availability?.endTime
                                    ? `${formatTime(availability.startTime)} - ${formatTime(availability.endTime)}`
                                    : '-'
                            }
                        />
                    </Box>
                    <ButtonGenericControl
                        label='Modificar'
                        action={() => setEditMode(true)}
                        disabled={editMode}
                    />
                </Box>
                <Divider sx={{ width: '100%', my: 2, }} />
                <Box display={'flex'} flexDirection={'column'} gap={'16px'} width={'100%'}>
                    <Typography variant="subtitle1">
                        Horario de trabajo
                    </Typography>
                    <Box display="flex" gap={2} width="100%">
                        <InputTimeControl
                            label="Desde"
                            value={startTime}
                            disabled={!editMode}
                            onChange={(newValue) => setStartTime(newValue)}
                        />
                        <InputTimeControl
                            label="Hasta"
                            value={endTime}
                            disabled={!editMode}
                            onChange={(newValue) => setEndTime(newValue)}
                        />
                    </Box>
                    {editMode && (
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'end'} >
                            <ButtonTextControl
                                label={'Cancelar'}
                                action={handleCancel}
                            />
                            <ButtonGenericControl
                                label={'Confirmar'}
                                action={handleConfirm}
                            />
                        </Box>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};