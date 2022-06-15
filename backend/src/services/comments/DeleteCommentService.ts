import { getCustomRepository } from "typeorm";
import { Comment } from "../../entities/Comment";
import { AppError } from "../../errors/AppError";
import { CommentsRepository } from "../../repositories/CommentsRepository";

interface IDeleteCommentRequest {
  id: string;
  user_id: string;
}

export class DeleteCommentService {
  async execute({ id, user_id }: IDeleteCommentRequest): Promise<Comment> {
    const commentsRepository = getCustomRepository(CommentsRepository);

    const comment = await commentsRepository.findOne({ id, user_id });

    if (!comment) {
      throw new AppError("Comment doesn't exist!", 404, `/comments/${id}`);
    }

    await commentsRepository.delete({ id });
    return comment;
  }
}
