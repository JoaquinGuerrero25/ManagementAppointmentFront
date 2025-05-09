import { useEffect, useState } from "react";
import { patientService } from "../services/patientService";
import UpcomingAppointments from "../components/Patient/UpcomingAppointments";
import MedicalHistory from "../components/Patient/MedicalHistory";

const HomePaciente = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await patientService.getProfile(); // trae el paciente logueado
        setPatient(data);
      } catch (error) {
        console.error("Error al cargar el perfil del paciente", error);
      }
    };

    fetchPatient();
  }, []);

  if (!patient) {
    return <div className="text-center mt-10">Cargando perfil...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">¡Bienvenido, {patient.nombre}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UpcomingAppointments />
        <MedicalHistory />
      </div>
    </div>
  );
};

export default HomePaciente;
