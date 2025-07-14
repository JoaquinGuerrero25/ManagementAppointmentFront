import { api } from '../api';
import { handleRequest, processResponse } from '../../utils/requestHandler';

export const get_base = (endpoint) => {
    return handleRequest(() => api.get(endpoint).then(res => processResponse(res)), 'Error al obtener datos');
};

export const post_base = (endpoint, data) => {
    return handleRequest(() => api.post(endpoint, data).then((res) => processResponse(res)), 'Error al enviar datos');
};

export const put_base = (endpoint, data) => {
    return handleRequest(() => api.put(endpoint, data).then(res => processResponse(res)), 'Error al actualizar datos');
};

export const delete_base = (endpoint) => {
    return handleRequest(() => api.delete(endpoint).then(res => processResponse(res)), 'Error al eliminar datos');
};  