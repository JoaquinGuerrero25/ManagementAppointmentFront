import { createAsyncThunk } from '@reduxjs/toolkit';
import { get_data_user, login as loginApi } from './authService';
import { logout } from './authSlice';
import { setError } from '../../redux/slices/errorSlice';
import { store } from '../../redux/store';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const token = await loginApi(formData);

      if (!token) {
        return thunkAPI.rejectWithValue('No se recibió un token válido');
      }

      localStorage.setItem('token', token);

      const user = await get_data_user();

      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue('Error al iniciar sesión');
    }
  }
);

export const logoutUser = () => {
  try {
    store.dispatch(logout());
  } catch (error) {
    store.dispatch(setError('Error al cerrar sesión'));
  }
};