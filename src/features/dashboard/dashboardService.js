import { get_base } from "../../api/services/baseService"

export const get_data_dashboard_admin = async () => {
    return await get_base('Dashboard/Admin');
};

export const get_data_dashboard_doctor = async (id) => {
    return await get_base(`Dashboard/Doctor/${id}`);
};