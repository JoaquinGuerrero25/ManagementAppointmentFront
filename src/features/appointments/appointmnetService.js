import { get_base, post_base } from "../../api/services/baseService"

export const get_appointment_availabilities = async (doctorId, date) => {
    return await get_base(`Appointment/availabilities${doctorId}?date=${date}`);
};

export const add_appointment = async (params) => {
    return await post_base('Appointment', params);
}