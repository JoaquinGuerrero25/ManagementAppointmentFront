import { get_base } from "../api/services/baseService"

export const get_data_dashboard_admin = async () => {
    return get_base('Dashboard/Admin');
}