import { get_base } from "../../api/services/baseService"

export const get_specialties = async () => {
    return await get_base('Specialty');
};