import { post_base, put_base } from "../../api/services/baseService";

export const add_availability = async (data) => {
    return await post_base('Availability', data);
};

export const update_availability = async (id, data) => {
    return await put_base(`Availability/${id}`, data);
};