import React from 'react';
import { Box, Typography, Stack, Card } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#1976d2', '#64b5f6'];

export const ActiveUsersByRoleCard = ({ patientsActive, doctorsActive }) => {
    const data = [
        { name: 'Doctores', value: doctorsActive },
        { name: 'Pacientes', value: patientsActive },
    ];

    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <Card
            sx={{
                p: 3,
                borderRadius: '16px',
                boxShadow: 'var(--customShadows-card)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Typography variant="subtitle1" width='100%' fontWeight={600} fontSize={'1.0625rem'} lineHeight={'1.56'} textAlign={'start'}>
                Usuarios activos
            </Typography>
            <Typography variant="body2" width='100%' fontWeight='400' fontSize='0.875rem' color="text.secondary" margin='4px 0px 0px' textAlign='start'>
                Comparativa entre doctores y pacientes
            </Typography>

            <Box sx={{ width: '240px', height: '240px', position: 'relative' }}>
                <PieChart width={240} height={240} >
                    <Pie
                        data={data}
                        innerRadius={90}
                        outerRadius={110}
                        paddingAngle={0}
                        stroke='none'
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        Total
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        fontFamily='Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
                    >
                        {total.toLocaleString()}
                    </Typography>
                </Box>
            </Box>

            <Stack direction="row" justifyContent="center" spacing={3} mt={2}>
                <LegendItem color={COLORS[0]} label="Doctores" />
                <LegendItem color={COLORS[1]} label="Pacientes" />
            </Stack>
        </Card>
    );
};

const LegendItem = ({ color, label }) => (
    <Stack direction="row" alignItems="center" spacing={1}>
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: color }} />
        <Typography variant="body2" color="text.secondary">
            {label}
        </Typography>
    </Stack>
);