import { getCustomRepository } from "typeorm";
import { Comment } from "../../entities/Comment";
import { AppError } from "../../errors/AppError";
import { CommentsRepository } from "../../repositories/CommentsRepository";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IAllProductCommentsRequest {
  product_id: string;
  limit?: number;
}

export class GetAllProductCommentsService {
  async execute({
    product_id,
    limit = 8,
  }: IAllProductCommentsRequest): Promise<Comment[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productExists = await productsRepository.findOne({ id: product_id });

    if (!productExists) {
      throw new AppError(
        "Product doesn't exist!",
        404,
        `/products/${product_id}`,
      );
    }

    const commentsRepository = getCustomRepository(CommentsRepository);

    const comments = await commentsRepository.find({
      where: { product_id },
      take: limit,
    });

    return comments;
  }
}
