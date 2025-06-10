export const days = [
    { label: 'Lunes', value: 'Monday' },
    { label: 'Martes', value: 'Tuesday' },
    { label: 'Miércoles', value: 'Wednesday' },
    { label: 'Jueves', value: 'Thursday' },
    { label: 'Viernes', value: 'Friday' },
    // { label: 'Sábado', value: 'saturday' },
    // { label: 'Domingo', value: 'sunday' },
];

export const formatTime = (time) => {
    if (!time) return '';
    return time.slice(0, 5);
};