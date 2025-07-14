import { get_specialties } from "./specialtyService";
import { store } from "../../redux/store";
import { setSpecialties } from "./specialtySlice";

export const get_specialties_thunks = async () => {
    const response = await get_specialties();
    store.dispatch(setSpecialties(response));
    return response;
};