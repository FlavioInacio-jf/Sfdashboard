import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { PRODUCT_NOT_FOUND } from "../../app/exceptions";
import { Product } from "../entities";
import { ProductsRepository } from "../repositories";

interface IGetSingleProductRequest {
  id: string;
}

export class GetSingleProductService {
  async execute({ id }: IGetSingleProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id, {
      select: ["id", "title", "amount", "price", "created_at"],
    });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    return product;
  }
}
