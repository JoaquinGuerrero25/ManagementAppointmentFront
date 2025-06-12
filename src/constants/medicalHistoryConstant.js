export const medicalHistoryModels = [
    { key: 'appoinment', label: 'Fecha' },
    { key: 'patient', label: 'Paciente' },
    { key: 'doctor', label: 'Doctor' },
    { key: 'reasonForVisit', label: 'Motivo de la consulta' },
    { key: 'diagnosis', label: 'Diagnóstico' },
];

export const medicalHistoryModelsView = [
    // { key: 'id', label: 'ID del Registro' },
    { key: 'patient', label: 'Paciente' },
    // { key: 'patientId', label: 'ID del Paciente' },
    { key: 'doctor', label: 'Médico' },
    // { key: 'doctorId', label: 'ID del Médico' },
    { key: 'appoinment', label: 'Cita' },
    // { key: 'appointmentId', label: 'ID de la Cita' },
    { key: 'reasonForVisit', label: 'Motivo de la visita' },
    { key: 'diagnosis', label: 'Diagnóstico' },
    { key: 'treatment', label: 'Tratamiento' },
    { key: 'notes', label: 'Notas' },
];

export const medicalHistoryCreateFields = [
    { name: 'reasonForVisit', label: 'Motivo de Consulta', placeholder: 'Describe el motivo de la consulta', type: 'text', required: true, visible: true },
    { name: 'diagnosis', label: 'Diagnóstico', placeholder: 'Ingresa el diagnóstico', type: 'text', required: true, visible: true },
    { name: 'treatment', label: 'Tratamiento', placeholder: 'Describe el tratamiento recomendado', type: 'text', required: true, visible: true },
    { name: 'notes', label: 'Notas Adicionales', placeholder: 'Agrega notas o indicaciones', type: 'textarea', required: false, visible: true },
    { name: 'appointmentId', label: '', placeholder: '', type: '', required: false, visible: false },
    { name: 'patientId', label: '', placeholder: '', type: '', required: false, visible: false },
    { name: 'doctorId', label: '', placeholder: '', type: '', required: false, visible: false },
];