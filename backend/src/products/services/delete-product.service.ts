import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { PRODUCT_NOT_FOUND } from "../../app/exceptions";
import { Product } from "../../app/entities";
import { ProductsRepository } from "../../app/repositories";

interface IDeleteProductRequest {
  id: string;
}

export class DeleteProductService {
  async execute({ id }: IDeleteProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    await productsRepository.delete({ id });
    return product;
  }
}
