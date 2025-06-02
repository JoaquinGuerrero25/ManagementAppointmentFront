import { delete_base, get_base, post_base, put_base } from "../../api/services/baseService"

export const get_specialties = async () => {
    return await get_base('Specialty');
};

export const get_specialty_by_id = async (id) => {
    return await get_base(`Specialty/${id}`);
};

export const add_specialty = async (formData) => {
    return await post_base('Specialty', formData);
};

export const update_specialty = async (id, formData) => {
    return await put_base(`Specialty/${id}`, formData);
};

export const delete_specialty = async (id) => {
    return await delete_base(`Specialty/${id}`);
};