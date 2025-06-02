import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    specialties: [],
};

const specialtySlice = createSlice({
    name: 'specialties',
    initialState,
    reducers: {
        setSpecialties: (state, action) => {
            state.specialties = action.payload;
        }
    }
});

export const { setSpecialties } = specialtySlice.actions;
export default specialtySlice.reducer;