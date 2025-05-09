import { useEffect, useState } from "react";
import { patientService } from "../../services/patientService";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await patientService.getUpcomingAppointments();
        setAppointments(data);
      } catch (error) {
        console.error("Error al cargar próximos turnos", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Próximos Turnos</h2>
      {appointments.length === 0 ? (
        <p>No tienes turnos programados.</p>
      ) : (
        <ul className="space-y-3">
          {appointments.map((appt) => (
            <li key={appt.id} className="border p-3 rounded hover:bg-gray-100">
              <div className="font-bold">{appt.fecha} - {appt.hora}</div>
              <div className="text-sm text-gray-600">Doctor: {appt.doctorNombre}</div>
              <div className="text-sm text-gray-500">Estado: {appt.estado}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingAppointments;
