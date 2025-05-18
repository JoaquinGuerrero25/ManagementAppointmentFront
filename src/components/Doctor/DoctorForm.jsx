import { useForm } from "react-hook-form";

export const DoctorForm = ({ onClose, onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || {
      nombre: "",
      email: "",
      especialidades: "",
    },
  });

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">
          {defaultValues ? "Editar Doctor" : "Nuevo Doctor"}
        </h2>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input
              type="text"
              {...register("nombre", { required: "Nombre es obligatorio" })}
              className="border p-2 w-full rounded"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email es obligatorio" })}
              className="border p-2 w-full rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Especialidades (separadas por coma)</label>
            <input
              type="text"
              {...register("especialidades", { required: "Especialidades son obligatorias" })}
              className="border p-2 w-full rounded"
            />
            {errors.especialidades && (
              <p className="text-red-500 text-sm">{errors.especialidades.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-400 text-gray-600 hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
