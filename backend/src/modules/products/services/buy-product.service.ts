import { getCustomRepository } from "typeorm";
import {
  ClientsRepository,
  CustomError,
  ProductsRepository,
  Sale,
  SalesRepository,
  UsersRepository,
} from "../../app";
import {
  CLIENT_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  PRODUCT_NOT_HAVE_ENOUGH_STOCK,
} from "../../app/exceptions";
import { IProductBuy } from "../types";

export class BuyProductService {
  async execute({
    product_id,
    client_id,
    amount,
    user_id,
  }: IProductBuy): Promise<Sale> {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const clientExists = await clientsRepository.findOne(client_id);
    if (!clientExists) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    const productsRepository = getCustomRepository(ProductsRepository);
    const productExists = await productsRepository.findOne(product_id);
    if (!productExists) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }
    if (productExists.amount < amount) {
      throw new CustomError(PRODUCT_NOT_HAVE_ENOUGH_STOCK);
    }
    const salesRepository = getCustomRepository(SalesRepository);

    const transaction = salesRepository.create({
      amount,
      product_id,
      client_id,
      user_id,
    });

    const usersRepository = getCustomRepository(UsersRepository);
    const userExists = await usersRepository.findOne(user_id);
    userExists.quantity_sales += 1;
    userExists.total_sales += productExists.price * amount;

    productExists.amount -= amount;

    if (productExists.amount === 0) {
      productExists.status = "Out of stock";
    }

    await usersRepository.save(userExists);
    await productsRepository.save(productExists);
    await salesRepository.save(transaction);

    return transaction;
  }
}
