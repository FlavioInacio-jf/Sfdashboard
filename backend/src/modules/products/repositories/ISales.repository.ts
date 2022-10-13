import { ICreateTransactionSalesRequestDTO } from "../dtos";
import { Sale } from "../entities";

export interface ISalesRepository {
  create: (data: ICreateTransactionSalesRequestDTO) => Promise<Sale>;
  update: (data: Sale) => Promise<void>;
}
