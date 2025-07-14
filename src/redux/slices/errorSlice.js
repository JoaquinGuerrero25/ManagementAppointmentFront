import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: null,
    type: 'error',
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type || 'error';
        },
        clearError: (state) => {
            state.message = null;
            state.type = 'error';
        },
    },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;