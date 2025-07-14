import { configureStore } from "@reduxjs/toolkit";
import errorReducer from './slices/errorSlice';
import authReducer from '../features/auth/authSlice';
import specialtyReducer from '../features/specialty/specialtySlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        error: errorReducer,
        specialties: specialtyReducer,
    },
});