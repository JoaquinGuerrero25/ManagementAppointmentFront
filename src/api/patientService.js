import { api } from "./api"

export const get_patients = async () => {
    const response = await api.get('Patient');
    return response.data.value;
}