import { CredentialsType } from '../types/credentialsType';
import { api } from './api';

const { post } = api;

export const authService = {
  login: (credentials: CredentialsType) => post('auth/login', credentials)
};
