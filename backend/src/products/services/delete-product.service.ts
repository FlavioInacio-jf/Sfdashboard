import { getCustomRepository } from "typeorm";
import { AppError } from "../../app";
import { Product } from "../entities";
import { ProductsRepository } from "../repositories";

interface IDeleteProductRequest {
  id: string;
}

export class DeleteProductService {
  async execute({ id }: IDeleteProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if (!product) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    await productsRepository.delete({ id });
    return product;
  }
}
