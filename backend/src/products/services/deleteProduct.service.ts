import { getCustomRepository } from "typeorm";
import { Product } from "../entities";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../repositories";

interface IDeleteProductRequest {
  id: string;
  user_id: string;
}

export class DeleteProductService {
  async execute({ id, user_id }: IDeleteProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id, user_id });

    if (!product) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    await productsRepository.delete({ id });
    return product;
  }
}
