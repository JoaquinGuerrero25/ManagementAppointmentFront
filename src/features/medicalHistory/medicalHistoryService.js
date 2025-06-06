import { get_base } from "../../api/services/baseService"

export const get_medical_history_patient = async (patientId) => {
    return await get_base(`/MedicalHistory/ByPatient/${patientId}`)
};