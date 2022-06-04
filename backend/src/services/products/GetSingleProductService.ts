import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IGetSingleProductRequest {
  id: string;
  user_id: string;
}

export class GetSingleProductService {
  async execute({ id, user_id }: IGetSingleProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(
      { id, user_id },
      {
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
      },
    );

    if (!product) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    return product;
  }
}
