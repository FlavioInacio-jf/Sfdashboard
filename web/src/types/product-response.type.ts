import { ProductStatusType } from '.';

export interface IProductResponse {
  id: number;
  title: string;
  price: number;
  amount: number;
  status: ProductStatusType;
  created_at: Date;
}
