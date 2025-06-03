import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const STORAGE_KEY = "authState";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (serializedState === null) {
            return {
                isAuthenticated: false,
                user: null,
                token: null,
            };
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return {
            isAuthenticated: false,
            user: null,
            token: null,
        };
    }
};

const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
};

const initialState = loadState();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            saveState(state);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            saveState(state);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            saveState(state);
        });
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;