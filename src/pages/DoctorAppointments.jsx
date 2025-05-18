import AppointmentList from "../components/Doctor/AppointmentList";

const DoctorAppointments = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Turnos asignados</h1>
      <AppointmentList />
    </div>
  );
};

export default DoctorAppointments;
