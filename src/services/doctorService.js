import axios from "axios";

const API_URL = "http://localhost:5241/api/Doctor"; // acomodar segun puerto

export const doctorService = {
  getAll: async () => {
    const { data } = await axios.get(`${API_URL}`);
    return data;
  },

  create: async (doctor) => {
    const { data } = await axios.post(`${API_URL}`, doctor);
    return data;
  },

  update: async (id, doctor) => {
    const { data } = await axios.put(`${API_URL}/${id}`, doctor);
    return data;
  },

  delete: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
