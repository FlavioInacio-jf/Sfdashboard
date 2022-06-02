import { parseCookies } from 'nookies';
import { users } from '../constants/endpoints';
import { api } from './api';

const { get } = api;

export const userService = {
  me: async () => {
    const { 'SFDashboard.auth.token': token } = parseCookies();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const { data } = await get(`${users}/me`, config);
      return data.result;
    } catch (err) {
      console.error(err);
    }
  }
};
