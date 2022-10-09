import { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';
import { EndPoints } from '../enums';
import { UserRegisterType } from '../types/userType';
import { api } from '.';

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
      const { data } = await get(`${EndPoints.USERS}/me`, config);
      return data.result;
    } catch (err) {
      console.log(err);
    }
  },
  create: async (user: UserRegisterType, config?: AxiosRequestConfig) =>
    post(`${EndPoints.USERS}`, user, config)
};
