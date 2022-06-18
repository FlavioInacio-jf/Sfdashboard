import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IAllProductsRequest {
  limit?: number;
  user_id: string;
}

export class GetAllProductsService {
  async execute({
    user_id,
    limit = 8,
  }: IAllProductsRequest): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.find({
      where: { user_id },
      select: [
        "id",
        "title",
        "amount",
        "description",
        "photo",
        "category",
        "price",
        "category",
        "physical_condition",
        "status",
        "created_at",
      ],
      take: limit,
    });
    return products;
  }
}
