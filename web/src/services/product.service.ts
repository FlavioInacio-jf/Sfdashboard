import { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';
import { api } from '.';
import { EndPoints } from '../enums';
import {
  IApiResponse,
  IProductRegisterRequest,
  IProductResponse,
  IProductUpdateRequest
} from '../types';

const { get, delete: destroy, post, patch } = api;

export const productService = {
  index: async (): Promise<IApiResponse<IProductResponse[]> | undefined> => {
    const { 'SFDashboard.auth.token': token } = parseCookies();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const res = await get(`${EndPoints.PRODUCTS}`, config);
      return res.data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },
  create: (product: IProductRegisterRequest, config?: AxiosRequestConfig) =>
    post(`${EndPoints.PRODUCTS}`, product, config),

  update: ({ id, ...rest }: IProductUpdateRequest, config?: AxiosRequestConfig) =>
    patch(`${EndPoints.PRODUCTS}/${id}`, rest, config),
  single: (id: string, config?: AxiosRequestConfig) => get(`${EndPoints.PRODUCTS}/${id}`, config),
  remove: (id: number, config?: AxiosRequestConfig) =>
    destroy(`${EndPoints.PRODUCTS}/${id}`, config)
};
