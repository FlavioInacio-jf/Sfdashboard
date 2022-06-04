import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export class GetAllProductsService {
  async execute(user_id: string): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.find({
      where: { user_id },
      select: [
        "id",
        "name",
        "amount",
        "description",
        "photo_url",
        "category",
        "price",
        "created_at",
        "updated_at",
      ],
    });
    return products;
  }
}
