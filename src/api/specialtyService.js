import { api } from './api';

export const get_specialties = async () => {
    const response = await api.get('Specialty');
    return response.data.value;
}

export const add_specialty = async (formData) => {
    const response = await api.post('Specialty', formData);
    return response.data.value;
}