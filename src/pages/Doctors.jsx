import DoctorTable from "../components/Doctor/DoctorTable.jsx";

const Doctors = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Gestión de Doctores</h1>
      <DoctorTable />
    </div>
  );
};

export default Doctors;
