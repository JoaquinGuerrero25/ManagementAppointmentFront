import { store } from '../redux/store';
import { setError } from '../redux/slices/errorSlice';

export const handleRequest = async (requestFn, defaultErrorMessage = 'Ocurrió un error inesperado') => {
    try {
        return await requestFn();
    } catch (error) {
        const message = error?.response?.data?.title || error?.message || defaultErrorMessage;
        store.dispatch(setError({ message }));
        throw error;
    }
};

export const processResponse = (response) => {
    const { data } = response;

    if (!data) {
        throw new Error('La respuesta de la API no contiene "data"');
    }

    if (!data.isSuccess) {
        const message = data?.errorMessage || 'Error desconocido de la API';
        throw new Error(message);
    }

    return data?.value;
};