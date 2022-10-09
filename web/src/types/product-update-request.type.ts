import { IProductResponse } from '.';

export type IProductUpdateRequest = Omit<IProductResponse, 'bar_code' | 'created_at'>;
