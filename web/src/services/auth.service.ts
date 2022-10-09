import { api } from '.';
import { IAuthCredentials } from '../types';

const { post } = api;

export const authService = {
  login: (credentials: IAuthCredentials) => post('auth/login', credentials)
};
