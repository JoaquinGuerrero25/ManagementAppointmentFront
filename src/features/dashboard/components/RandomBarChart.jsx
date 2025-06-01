import { useMemo } from 'react';
import { Box } from '@mui/material';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomId() {
    return Math.random().toString(36).substring(2, 9);
}

function randomData() {
    return Array.from({ length: 7 }, (_, i) => ({
        name: `Día ${i + 1}`,
        value: Math.floor(Math.random() * 100),
    }));
}

export const RandomBarChart = () => {
    const data = useMemo(() => randomData(), []);
    const color = useMemo(() => randomColor(), []);
    const gradientId = useMemo(() => `color3d-${randomId()}`, []);

    return (
        <Box sx={{ width: 100, height: 60 }}>
            <ResponsiveContainer width="100%">
                <BarChart data={data}>
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity={1} />
                            <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                        </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill={`url(#${gradientId})`} radius={[10, 10, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))' }}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};