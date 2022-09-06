import { getCustomRepository } from "typeorm";
import { AppError } from "../../app";
import { Product } from "../entities";
import { ProductsRepository } from "../repositories";

interface IGetSingleProductRequest {
  id: string;
}

export class GetSingleProductService {
  async execute({ id }: IGetSingleProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({
      select: ["id", "title", "amount", "price", "created_at"],
    });

    if (!product) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    return product;
  }
}
