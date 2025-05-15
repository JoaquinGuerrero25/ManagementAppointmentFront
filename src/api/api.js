import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5096/api/',  // cambiar segun la ruta de la api
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);