import { get_base, post_base, put_base } from "../../api/services/baseService"

export const get_appointment_availabilities = async (doctorId, date) => {
    return await get_base(`Appointment/availabilities${doctorId}?date=${date}`);
};

export const add_appointment = async (params) => {
    return await post_base('Appointment', params);
}

export const get_appointment_by_doctor = async (id) => {
    return await get_base(`Appointment/doctor/${id}`);
};

export const get_appointment_by_patient = async (id) => {
    return await get_base(`Appointment/patient/${id}`);
};

export const cancel_appoitment = async (id) => {
    return await put_base(`Appointment/canceled/${id}`)
};