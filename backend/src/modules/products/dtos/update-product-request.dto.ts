import { ProductStatusEnum } from "../enums";

export interface IUpdateProductRequestDTO {
  id: string;
  title: string;
  price: number;
  amount: number;
  status: keyof typeof ProductStatusEnum;
}
