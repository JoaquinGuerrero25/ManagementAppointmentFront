import { configureStore } from "@reduxjs/toolkit";
import errorReducer from './slices/errorSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        error: errorReducer
    },
});