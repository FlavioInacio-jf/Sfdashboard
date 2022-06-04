import { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';
import { users } from '../constants/endpoints';
import { UserRegisterType } from '../types/userType';
import { api } from './api';

let cookies = parseCookies();
const { get, post } = api;

export const userService = {
  me: async () => {
    cookies = parseCookies();
    const { 'SFDashboard.auth.token': token } = cookies;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const { data } = await get(`${users}/me`, config);
      return data.result;
    } catch (err) {
      console.log(err);
    }
  },
  create: async (user: UserRegisterType, config?: AxiosRequestConfig) =>
    post(`${users}`, user, config)
};
