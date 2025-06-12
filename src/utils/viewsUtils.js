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

export const formatDateLong = (dateString) => {
    if (!dateString) return '';

    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat('es-AR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(date);
};