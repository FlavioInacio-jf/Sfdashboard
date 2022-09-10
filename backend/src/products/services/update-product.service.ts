import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { Product } from "../../app/entities";
import { PRODUCT_NOT_FOUND } from "../../app/exceptions";
import { ProductsRepository } from "../../app/repositories";
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
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    productExists.price = price || productExists.price;

    productExists.amount = amount !== undefined ? amount : productExists.amount;
    productExists.status = status || productExists.status;

    if (amount === 0) {
      productExists.status = "Out of stock";
    }

    if (amount > 0 && status !== "Not sell") {
      productExists.status = "In stock";
    }

    await productsRepository.save(productExists);

    return productExists;
  }
}
