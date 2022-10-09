import { IProductResponse } from './product-response.type';

export type IProductRegisterRequest = Omit<IProductResponse, 'id' | 'created_at'>;
