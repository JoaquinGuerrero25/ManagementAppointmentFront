export const patientCreateRequest = {
    Name: { value: '', label: 'Nombre', placeholder: 'Ingresa el nombre', type: 'text', required: true },
    LastName: { value: '', label: 'Apellido', placeholder: 'Ingresa el apellido', type: 'text', required: true },
    PhoneNumber: { value: '', label: 'Número de Teléfono', placeholder: 'Ingresa el número de teléfono', type: 'text', required: true },
    Address: { value: '', label: 'Dirección', placeholder: 'Ingresa la dirección', type: 'text', required: true },
    Email: { value: '', label: 'Correo Electrónico', placeholder: 'Ingresa el correo electrónico', type: 'email', required: true },
    Password: { value: '', label: 'Contraseña', placeholder: 'Ingresa la contraseña', type: 'password', required: true },
    // HealtInsurance: { value: null, label: 'Seguro de Salud', type: 'select', options: [{ value: 'none', label: 'Ninguno' }, { value: 'private', label: 'Privado' }, { value: 'public', label: 'Público' }], required: true },
    // IsAvailable: { value: true, label: 'Disponible', type: 'checkbox', required: false },
};