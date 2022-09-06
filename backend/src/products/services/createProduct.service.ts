import { getCustomRepository } from "typeorm";
import { Product } from "../entities";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../repositories";
import { IProductRequest } from "../../types/product/IProductRequest";

export class CreateProductService {
  async execute({
    title,
    price,
    amount,
    status,
    bar_code,
  }: IProductRequest): Promise<Product> {
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
