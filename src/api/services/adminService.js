import { get_base, put_base } from './baseService';

export const get_admin_by_id = async (id) => {
    return get_base(`Admin/${id}`);
};

export const update_admin = async (id, data) => {
    return put_base(`Admin/${id}`, data);
};