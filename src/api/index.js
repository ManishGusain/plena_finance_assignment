import axios from 'axios';
import { BASE_URL } from '../constants/General';

const API = axios.create({
    withCredentials: true,
});

API.interceptors.request.use(
    async config => {
        config.baseURL = BASE_URL;
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export const products_list_api = (limit = 10) => API.get(`/products?limit=${limit}`);
export const product_api = (id) => API.get(`/products/${id}`);
