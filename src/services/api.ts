import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants/endpoints';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.method === 'POST' || config.method === 'PUT' || config.method === 'PATCH') {
    config.headers = {
      'content-type': 'application/json; charset=UTF-8'
    };
  }
});
