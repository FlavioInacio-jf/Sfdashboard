import { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';
import { api } from '.';
import { EndPoints } from '../enums';
import { ProductRegisterType, ProductUpdateType } from '../types';

const { get, delete: destroy, post, patch } = api;

export const productService = {
  index: async () => {
    const { 'SFDashboard.auth.token': token } = parseCookies();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const res = await get(`${EndPoints.PRODUCTS}`, config);
      return res.data.result;
    } catch (err) {
      console.error(err);
    }
  },
  create: (product: ProductRegisterType, config?: AxiosRequestConfig) =>
    post(`${EndPoints.PRODUCTS}`, product, config),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update: (
    { id, created_at, updated_at, ...rest }: ProductUpdateType,
    config?: AxiosRequestConfig
  ) => patch(`${EndPoints.PRODUCTS}/${id}`, rest, config),
  single: (id: string, config?: AxiosRequestConfig) => get(`${EndPoints.PRODUCTS}/${id}`, config),
  remove: (id: number, config?: AxiosRequestConfig) =>
    destroy(`${EndPoints.PRODUCTS}/${id}`, config)
};
