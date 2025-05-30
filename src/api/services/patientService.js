import { api } from "../api"
import { post_base } from "./baseService";

export const get_patients = async () => {
    const response = await api.get('Patient');
    return response.data.value;
}

export const add_patient = async (data) => {
    return await post_base('Patient', data);
};