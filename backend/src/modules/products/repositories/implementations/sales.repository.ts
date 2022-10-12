import { getRepository, Repository } from "typeorm";
import { ICreateTransactionSalesRequestDTO } from "../../dtos";
import { Sale } from "../../entities";
import { ISalesRepository } from "../ISales.repository";

export class SalesRepository implements ISalesRepository {
  private repository: Repository<Sale>;

  constructor() {
    this.repository = getRepository(Sale);
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
