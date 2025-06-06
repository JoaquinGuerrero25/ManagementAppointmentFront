import { delete_base, get_base, post_base, put_base } from "../../api/services/baseService";

export const get_doctors = async () => {
    return await get_base('Doctor');
};

export const get_doctor_by_id = async (id) => {
    return await get_base(`Doctor/${id}`);
}

export const add_doctor = async (formData) => {
    return await post_base('Doctor', formData);
};

export const update_doctor = async (id, formData) => {
    return await put_base(`Doctor/${id}`, formData);
};

export const delete_doctor = async (id) => {
    return await delete_base(`Doctor/${id}`);
}