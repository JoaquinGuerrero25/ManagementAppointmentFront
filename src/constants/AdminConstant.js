export const adminModel = [
    { key: 'name', label: 'Nombre' },
    { key: 'lastName', label: 'Apellido' },
    { key: 'phoneNumber', label: 'Teléfono' },
    { key: 'address', label: 'Dirección' },
    { key: 'email', label: 'Email' },
    { key: 'isAvailable', label: 'Estado' },
];

export const adminUpdateFields = [
    { name: 'name', label: 'Nombre', placeholder: 'Ingresa el nombre del administrador', type: 'text', required: true, visible: true },
    { name: 'lastName', label: 'Apellido', placeholder: 'Ingresa el apellido del administrador', type: 'text', required: true, visible: true },
    { name: 'address', label: 'Dirección', placeholder: 'Ingresa la dirección', type: 'text', required: true, visible: true },
    { name: 'phoneNumber', label: 'Teléfono', placeholder: 'Ingresa el número de teléfono', type: 'text', required: true, visible: true },
    { name: 'email', label: 'Correo electrónico', placeholder: 'Ingresa el correo electrónico', type: 'email', required: true, visible: true },
    // { name: 'password', label: 'Contraseña', placeholder: 'Ingresa una contraseña', type: 'password', required: true, visible: true },
];