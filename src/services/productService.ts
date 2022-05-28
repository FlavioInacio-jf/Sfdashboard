import { AxiosRequestConfig } from 'axios';
import { PRODUCTS } from '../constants/endpoints';
import { ProductRegisterType, ProductType } from '../types/productType';
import { api } from './api';

const { get, delete: destroy, post, patch } = api;

export const productService = {
  index: async () => {
    try {
      const res = await get(`${PRODUCTS}`);
      return res.data.result;
    } catch (err) {
      console.error(err);
    }
  },
  create: (product: ProductRegisterType, config?: AxiosRequestConfig) => post('', product, config),
  update: ({ id, ...rest }: ProductType, config?: AxiosRequestConfig) =>
    patch(`${PRODUCTS}/${id}`, rest, config),
  single: (id: string, config?: AxiosRequestConfig) => get(`${PRODUCTS}/${id}`, config),
  remove: (id: string, config?: AxiosRequestConfig) => destroy(`${PRODUCTS}/${id}`, config)
};
