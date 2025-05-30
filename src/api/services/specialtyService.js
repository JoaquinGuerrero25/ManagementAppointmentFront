import { get_base } from "./baseService";

export const get_specialties = async () => {
    return await get_base('Specialty');
}

export const get_specialty_by_id = async (id) => {
    const response = await api.get(`Specialty/${id}`);
    return response.data.value;
}

export const add_specialty = async (formData) => {
    const response = await api.post('Specialty', formData);
    return response.data.value;
}

export const update_specialty = async (id, formData) => {
    const response = await api.put(`Specialty/${id}`, formData);
    return response.data.value;
}

export const delete_specialty = async (id) => {
    const response = await api.delete(`Specialty/${id}`);
    return response.data.value;
}