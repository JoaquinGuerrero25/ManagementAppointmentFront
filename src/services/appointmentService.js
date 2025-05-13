import { api } from "../api/api";

export const appointmentService = { //falta el doctorId en async 
  getAppointmentsForDoctor: async () => {
    const { data } = await api.get("/appointments/doctor"); // Ajustar si tu endpoint es distinto
    return data;
  },
};
