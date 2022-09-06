import { getCustomRepository } from "typeorm";
import { Product } from "../entities";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../repositories";

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
          "title",
          "amount",
          "description",
          "photo",
          "category",
          "price",
          "created_at",
        ],
      },
    );

    if (!product) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    return product;
  }
}
