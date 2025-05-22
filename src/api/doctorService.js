import { api } from "./api"

export const get_doctors = async () => {
    const response = await api.get('Doctor');
    return response.data.value;
};

export const add_doctor = async (formData) => {
    const response = await api.post('Doctor', formData);
    return response.data.value;
};

export const update_doctor = async (id, formData) => {
    const response = await api.put(`Doctor/${id}`, formData);
    return response.data.value;
};