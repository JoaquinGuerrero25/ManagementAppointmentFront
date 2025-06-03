export const patientModel = [
    { key: 'name', label: 'Nombre' },
    { key: 'lastName', label: 'Apellido' },
    { key: 'phoneNumber', label: 'Teléfono' },
    { key: 'address', label: 'Dirección' },
    { key: 'email', label: 'Email' },
    { key: 'healtInsurance', label: 'Obra Social' },
    { key: 'isAvailable', label: 'Estado' },
];

export const patientCreateFields = [
    { name: 'name', label: 'Nombre', placeholder: 'Ingresa el nombre', type: 'text', required: true, visible: true },
    { name: 'lastName', label: 'Apellido', placeholder: 'Ingresa el apellido', type: 'text', required: true, visible: true },
    { name: 'phoneNumber', label: 'Número de Teléfono', placeholder: 'Ingresa el número de teléfono', type: 'text', required: true, visible: true },
    { name: 'address', label: 'Dirección', placeholder: 'Ingresa la dirección', type: 'text', required: true, visible: true },
    { name: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa el correo electrónico', type: 'email', required: true, visible: true },
    { name: 'password', label: 'Contraseña', placeholder: 'Ingresa la contraseña', type: 'password', required: true, visible: true },
    // { name: 'healtInsurance', label: 'Obra Social', placeholder: 'Ingresa la obra social', type: 'text', required: true, visible: true },
];

export const patientUpdateFields = [
    { name: 'name', label: 'Nombre', placeholder: 'Ingresa el nombre', type: 'text', required: false, visible: true },
    { name: 'lastName', label: 'Apellido', placeholder: 'Ingresa el apellido', type: 'text', required: false, visible: true },
    { name: 'address', label: 'Dirección', placeholder: 'Ingresa la dirección', type: 'text', required: false, visible: true },
    { name: 'phoneNumber', label: 'Número de Teléfono', placeholder: 'Ingresa el número de teléfono', type: 'text', required: false, visible: true },
    { name: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa el correo electrónico', type: 'email', required: false, visible: true },
    { name: 'healtInsurance', label: 'Obra Social', placeholder: 'Ingresa la obra social', type: 'text', required: false, visible: true },
];