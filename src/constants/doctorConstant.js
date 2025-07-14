export const doctorModel = [
    { key: 'name', label: 'Nombre' },
    { key: 'lastName', label: 'Apellido' },
    { key: 'phoneNumber', label: 'Teléfono' },
    { key: 'address', label: 'Dirección' },
    { key: 'email', label: 'Correo electrónico' },
    { key: 'specialtyName', label: 'Especialidad' },
    { key: 'isAvailable', label: 'Estado' },
];

export const doctorCreateFields = [
    { name: 'name', label: 'Nombre', placeholder: 'Ingresa el nombre del doctor', type: 'text', required: true, visible: true },
    { name: 'lastName', label: 'Apellido', placeholder: 'Ingresa el apellido del doctor', type: 'text', required: true, visible: true },
    { name: 'phoneNumber', label: 'Teléfono', placeholder: 'Ingresa el número de teléfono', type: 'text', required: true, visible: true },
    { name: 'address', label: 'Dirección', placeholder: 'Ingresa la dirección', type: 'text', required: true, visible: true },
    { name: 'email', label: 'Correo electrónico', placeholder: 'Ingresa el correo electrónico', type: 'email', required: true, visible: true },
    { name: 'password', label: 'Contraseña', placeholder: 'Ingresa una contraseña', type: 'password', required: true, visible: true },
    { name: 'specialtyId', label: 'Especialidad', placeholder: 'Selecciona una especialidad', type: 'select', required: true, visible: false },
];

export const doctorUpdateFields = [
    { name: 'name', label: 'Nombre', placeholder: 'Ingresa el nombre del doctor', type: 'text', required: false, visible: true },
    { name: 'lastName', label: 'Apellido', placeholder: 'Ingresa el apellido del doctor', type: 'text', required: false, visible: true },
    { name: 'phoneNumber', label: 'Teléfono', placeholder: 'Ingresa el número de teléfono', type: 'text', required: false, visible: true },
    { name: 'address', label: 'Dirección', placeholder: 'Ingresa la dirección', type: 'text', required: false, visible: true },
    { name: 'email', label: 'Correo electrónico', placeholder: 'Ingresa el correo electrónico', type: 'email', required: false, visible: true },
    { name: 'specialtyId', label: 'Especialidad', placeholder: 'Selecciona una especialidad', type: 'select', required: false, visible: false },
    // { name: 'isAvailable', label: 'Disponible', placeholder: '', type: 'select', required: false, visible: false },
];