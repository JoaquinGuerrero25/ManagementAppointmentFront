const PatientDetailsModal = ({ patient, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Detalles del Paciente</h2>
        <div className="space-y-2">
          <p><strong>Nombre:</strong> {patient.nombre}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Teléfono:</strong> {patient.telefono}</p>
          <p><strong>Dirección:</strong> {patient.direccion}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsModal;
