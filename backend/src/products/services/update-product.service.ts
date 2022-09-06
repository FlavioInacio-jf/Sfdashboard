import { getCustomRepository } from "typeorm";
import { AppError } from "../../app";
import { Product } from "../entities";
import { ProductsRepository } from "../repositories";
import { IProductUpdate } from "../types";

export class UpdateProductService {
  async execute({
    id,
    price,
    amount,
    status,
  }: IProductUpdate): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productExists = await productsRepository.findOne({ id });

    if (!productExists) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    productExists.price = price || productExists.price;

    productExists.amount = amount || productExists.amount;
    productExists.status = status || productExists.status;

    await productsRepository.save(productExists);

    return productExists;
  }
}
