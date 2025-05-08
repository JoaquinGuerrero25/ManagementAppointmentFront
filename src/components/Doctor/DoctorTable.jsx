import { useState, useEffect } from "react";
import { DoctorForm } from "./DoctorForm";
import { doctorService } from "../../services/doctorService";
import { toast } from "react-toastify"; // (opcional, para mostrar notificaciones)

export const DoctorTable = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const fetchDoctors = async () => {
    try {
      const data = await doctorService.getAll();
      setDoctors(data);
    } catch (error) {
      console.error(error);
      toast.error("Error al cargar doctores");
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = () => {
    setEditingDoctor(null);
    setShowForm(true);
  };

  const handleEdit = (id) => {
    const doctor = doctors.find((doc) => doc.id === id);
    if (doctor) {
      setEditingDoctor(doctor);
      setShowForm(true);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de eliminar este doctor?")) {
      try {
        await doctorService.delete(id);
        toast.success("Doctor eliminado correctamente");
        fetchDoctors();
      } catch (error) {
        console.error(error);
        toast.error("Error al eliminar doctor");
      }
    }
  };

  const handleSubmitDoctor = async (data) => {
    try {
      if (editingDoctor) {
        await doctorService.update(editingDoctor.id, {
          nombre: data.nombre,
          email: data.email,
          especialidades: data.especialidades.split(",").map((e) => e.trim()),
        });
        toast.success("Doctor actualizado correctamente");
      } else {
        await doctorService.create({
          nombre: data.nombre,
          email: data.email,
          especialidades: data.especialidades.split(",").map((e) => e.trim()),
        });
        toast.success("Doctor creado correctamente");
      }
      fetchDoctors();
      setShowForm(false);
      setEditingDoctor(null);
    } catch (error) {
      console.error(error);
      toast.error("Error al guardar doctor");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Buscar doctor..."
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCreate}
        >
          Nuevo Doctor
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Especialidades</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{doctor.nombre}</td>
                <td className="p-3">{doctor.especialidades?.join(", ")}</td>
                <td className="p-3">{doctor.email}</td>
                <td className="p-3 space-x-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => handleEdit(doctor.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {filteredDoctors.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No se encontraron doctores.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <DoctorForm
          onClose={() => {
            setShowForm(false);
            setEditingDoctor(null);
          }}
          onSubmit={handleSubmitDoctor}
          defaultValues={editingDoctor && {
            nombre: editingDoctor.nombre,
            email: editingDoctor.email,
            especialidades: editingDoctor.especialidades.join(", "),
          }}
        />
      )}
    </div>
  );
};  

  export default DoctorTable;

