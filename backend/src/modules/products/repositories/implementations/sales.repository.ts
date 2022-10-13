import { Repository } from "typeorm";
import { appDataSource } from "../../../../database";
import { ICreateTransactionSalesRequestDTO } from "../../dtos";
import { Sale } from "../../entities";
import { ISalesRepository } from "../ISales.repository";

export class SalesRepository implements ISalesRepository {
  private repository: Repository<Sale>;

  constructor() {
    this.repository = appDataSource.getRepository(Sale);
  }
  async create(data: ICreateTransactionSalesRequestDTO): Promise<Sale> {
    const transaction = this.repository.create(data);
    await this.repository.save(transaction);
    return transaction;
  }
  async update(data: Sale): Promise<void> {
    await this.repository.save(data);
  }
}
