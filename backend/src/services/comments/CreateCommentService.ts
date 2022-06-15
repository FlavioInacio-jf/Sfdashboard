import { getCustomRepository } from "typeorm";
import { Comment } from "../../entities/Comment";
import { AppError } from "../../errors/AppError";
import { CommentsRepository } from "../../repositories/CommentsRepository";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface ICreateCommentRequest {
  title: string;
  description: string;
  user_id: string;
  product_id: string;
}

export class CreateCommentService {
  async execute({
    title,
    description,
    user_id,
    product_id,
  }: ICreateCommentRequest): Promise<Comment> {
    const commentsRepository = getCustomRepository(CommentsRepository);
    const productRepository = getCustomRepository(ProductsRepository);

    const productExists = await productRepository.findOne(product_id);

    if (!productExists) {
      throw new AppError("Comment product doesn't exist!", 404, "/comments");
    }

    const comment = commentsRepository.create({
      title,
      description,
      product_id,
      user_id,
    });

    await commentsRepository.save(comment);
    return comment;
  }
}
