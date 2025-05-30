import { api } from '../api';

export const get_data_dashboard_admin = async () => {
    const response = await api.get('Dashboard/Admin');
    return response.data.value;
};