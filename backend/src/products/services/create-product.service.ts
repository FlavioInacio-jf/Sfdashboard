import { getCustomRepository } from "typeorm";
import { AppError } from "../../app";
import { Product } from "../entities";
import { ProductsRepository } from "../repositories";
import { IProductRegister } from "../types";

export class CreateProductService {
  async execute({
    title,
    price,
    amount,
    status,
    bar_code,
  }: IProductRegister): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const barCodeAlreadyExists = await productsRepository.findOne({ bar_code });

    if (barCodeAlreadyExists) {
      throw new AppError(`Product "${title}" already exists`, 409, "/products");
    }

    const product = productsRepository.create({
      title,
      price,
      amount,
      bar_code,
      status,
    });

    await productsRepository.save(product);

    return product;
  }
}
