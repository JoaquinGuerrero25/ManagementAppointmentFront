import { get_base, post_base } from "../../api/services/baseService"

export const get_medical_history_patient = async (patientId) => {
    return await get_base(`/MedicalHistory/ByPatient/${patientId}`)
};

export const get_medical_history_doctor = async (doctorId) => {
    return await get_base(`/MedicalHistory/ByDoctor/${doctorId}`);
};

export const add_medical_history = async (data) => {
    return await post_base(`MedicalHistory`, data);
};