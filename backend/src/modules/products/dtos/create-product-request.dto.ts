import { ProductStatusEnum } from "../enums";

export interface ICreateProductRequestDTO {
  bar_code: string;
  title: string;
  price: number;
  amount: number;
  status: keyof typeof ProductStatusEnum;
}
