import { get_base, post_base } from "../../api/services/baseService";

export const login = async (formData) => {
    return await post_base('Authentication', formData);
};

export const get_data_user = async () => {
    return await get_base('Authentication/FindUserClaims');
};