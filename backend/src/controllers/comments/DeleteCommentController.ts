import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { DeleteCommentService } from "../../services/comments/DeleteCommentService";

export class DeleteCommentController {
  async execute(req: Request, res: Response) {
    const deleteCommentService = new DeleteCommentService();

    try {
      const { id } = req.params;
      const { id: user_id } = req.user;

      const comment = await deleteCommentService.execute({ id, user_id });

      return res.status(201).json({
        message: "Comment removed successfully",
        result: comment,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/comments");
    }
  }
}
