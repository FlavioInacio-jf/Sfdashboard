import { ProductStatusType } from '.';

export interface IProductResponse {
  id: number;
  title: string;
  price: number;
  bar_code: string;
  amount: number;
  status: ProductStatusType;
  created_at: Date;
}
