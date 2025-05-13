import { useEffect, useState } from "react";
import { appointmentService } from "../../services/appointmentService";
import PatientDetailsModal from "./PatientDetailsModal";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const doctorId = 1; // HARDCODEADO por ahora
        const data = await appointmentService.getAppointmentsForDoctor(doctorId);
        setAppointments(data);
      } catch (error) {
        console.error("Error al cargar turnos", error);
      }
    };

    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter((appt) => {
    const matchDate = filterDate ? appt.fecha === filterDate : true;
    const matchStatus = filterStatus ? appt.estado === filterStatus : true;
    return matchDate && matchStatus;
  });

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="date"
          className="border p-2 rounded w-full md:w-1/3"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full md:w-1/3"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="confirmado">Confirmado</option>
          <option value="cancelado">Cancelado</option>
          <option value="completado">Completado</option>
        </select>
      </div>

      {filteredAppointments.length === 0 ? (
        <p>No se encontraron turnos.</p>
      ) : (
        <ul className="space-y-3">
          {filteredAppointments.map((appt) => (
            <li key={appt.id} className="border p-4 rounded hover:bg-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <div className="font-bold">{appt.fecha} - {appt.hora}</div>
                <div className="text-gray-600 text-sm">Estado: {appt.estado}</div>
              </div>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mt-2 md:mt-0"
                onClick={() => setSelectedPatient(appt.paciente)}
              >
                Ver Paciente
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
};

export default AppointmentList;
