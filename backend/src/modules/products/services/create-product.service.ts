import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { Product } from "../../app/entities";
import { BAR_CODE_ALREADY_EXIST } from "../../app/exceptions";
import { ProductsRepository } from "../../app/repositories";
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
      throw new CustomError(
        BAR_CODE_ALREADY_EXIST(barCodeAlreadyExists.bar_code),
      );
    }

    const product = productsRepository.create({
      title,
      price,
      amount,
      bar_code,
      ...(amount === 0 ? { status: "Out of stock" } : { status }),
    });

    await productsRepository.save(product);

    return product;
  }
}
