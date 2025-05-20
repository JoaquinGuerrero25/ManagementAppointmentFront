import { api } from './api';

export const get_specialties = async () => {
    const response = await api.get('Specialty');
    return response.data.value;
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