import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants/endpoints';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.method === 'POST' || config.method === 'PUT' || config.method === 'PATCH') {
    config.headers = {
      'content-type': 'application/json; charset=UTF-8'
    };
  }
  return config;
});
api.interceptors.response.use((response) => response);

export { api };
