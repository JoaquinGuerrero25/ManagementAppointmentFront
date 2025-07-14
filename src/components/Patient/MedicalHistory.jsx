import { useEffect, useState } from "react";
import { patientService } from "../../services/patientService";

const MedicalHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await patientService.getMedicalHistory();
        setHistory(data);
      } catch (error) {
        console.error("Error al cargar historial médico", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Historial Médico</h2>
      {history.length === 0 ? (
        <p>Aún no tienes historial médico registrado.</p>
      ) : (
        <ul className="space-y-3">
          {history.map((item) => (
            <li key={item.id} className="border p-3 rounded hover:bg-gray-100">
              <div className="font-bold">{item.diagnostico}</div>
              <div className="text-sm text-gray-600">{item.fecha}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicalHistory;
