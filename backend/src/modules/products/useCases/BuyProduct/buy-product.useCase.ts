import { CustomError } from "../../../app";
import {
  CLIENT_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  PRODUCT_NOT_HAVE_ENOUGH_STOCK,
} from "../../../app/exceptions";
import { IClientsRepository } from "../../../clients/repositories";
import { IUsersRepository } from "../../../users/repositories";
import { ICreateTransactionSalesRequestDTO } from "../../dtos";
import { Sale } from "../../entities";
import { IProductsRepository, ISalesRepository } from "../../repositories";

export class BuyProductUseCase {
  constructor(
    private productsRepository: IProductsRepository,
    private salesRepository: ISalesRepository,
    private clientsRepository: IClientsRepository,
    private usersRepository: IUsersRepository,
  ) {}
  async execute({
    product_id,
    client_id,
    amount,
    user_id,
  }: ICreateTransactionSalesRequestDTO): Promise<Sale> {
    const clientExists = await this.clientsRepository.findById(client_id);
    if (!clientExists) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    const productExists = await this.productsRepository.findById(product_id);
    if (!productExists) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }
    if (productExists.amount < amount) {
      throw new CustomError(PRODUCT_NOT_HAVE_ENOUGH_STOCK);
    }

    const userExists = await this.usersRepository.findById(user_id);
    userExists.quantity_sales += 1;
    userExists.total_sales += productExists.price * amount;

    productExists.amount -= amount;

    if (productExists.amount === 0) {
      productExists.status = "Out of stock";
    }

    await this.usersRepository.update(userExists);
    await this.productsRepository.update(productExists);
    const transaction = await this.salesRepository.create({
      product_id,
      client_id,
      amount,
      user_id,
    });

    return transaction;
  }
}
