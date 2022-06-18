import { getCustomRepository } from "typeorm";
import { Comment } from "../../entities/Comment";
import { AppError } from "../../errors/AppError";
import { CommentsRepository } from "../../repositories/CommentsRepository";

interface IUpdateCommentRequest {
  user_id: string;
  id: string;
  title: string;
  description: string;
}

export class UpdateCommentService {
  async execute({
    user_id,
    id,
    title,
    description,
  }: IUpdateCommentRequest): Promise<Comment> {
    const commentsRepository = getCustomRepository(CommentsRepository);

    const commentExists = await commentsRepository.findOne({ id, user_id });

    if (!commentExists) {
      throw new AppError("Comment doesn't exist!", 404, `/comments/${id}`);
    }

    commentExists.title = title || commentExists.title;
    commentExists.description = description || commentExists.description;

    await commentsRepository.save(commentExists);

    return commentExists;
  }
}
