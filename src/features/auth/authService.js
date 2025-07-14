import { get_base, post_base } from "../../api/services/baseService";

export const login = async (formData) => {
    return await post_base('Authentication', formData);
};

export const get_data_user = async () => {
    return await get_base('Authentication/FindUserClaims');
};

export const forgot_password = async (email) => {
    return await post_base('Authentication/forgot-password', email);
};

export const reset_password = async (token, password) => {
    return await post_base('Authentication/reset-password', {token: token, newPassword: password});
};