import { getCustomRepository } from "typeorm";
import { Product } from "../../app/entities";
import { ProductsRepository } from "../../app/repositories";

interface IAllProductsRequest {
  limit?: number;
}

export class GetAllProductsService {
  async execute({ limit = 8 }: IAllProductsRequest): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.find({
      select: ["id", "title", "amount", "price", "status", "created_at"],
      take: limit,
    });
    return products;
  }
}
