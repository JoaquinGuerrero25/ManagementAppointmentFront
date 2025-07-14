import { delete_base, get_base, post_base, put_base } from "../../api/services/baseService";

export const get_patients = async () => {
    return await get_base('Patient');
};

export const get_patient_by_id = async (id) => {
    return await get_base(`Patient/${id}`);
};

export const add_patient = async (data) => {
    return await post_base('Patient', data);
};

export const update_patient = async (id, data) => {
    return await put_base(`Patient/${id}`, data);
};

export const delete_patient = async (id) => {
    return await delete_base(`Patient/${id}`);
};
