import { api } from "../api/api"; // lo vinculas directo usando el serv de doctor

export const patientService = {
  getProfile: async () => {
    const { data } = await api.get("/patients/profile");
    return data;
  },
  getUpcomingAppointments: async () => {
    const { data } = await api.get("/appointments/upcoming");
    return data;
  },
  getMedicalHistory: async () => {
    const { data } = await api.get("/medical-history");
    return data;
  },
};
