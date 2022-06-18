import { Request, Response } from "express";
import { UpdateCommentService } from "../../services/comments/UpdateCommentService";

export class UpdateCommentController {
  async execute(req: Request, res: Response) {
    const updateCommentService = new UpdateCommentService();

    const { id } = req.params;
    const { id: user_id } = req.user;
    const { title, description } = req.body;

    const comment = await updateCommentService.execute({
      user_id,
      id,
      title,
      description,
    });

    return res.status(201).json({
      message: "Comment updated successfully!",
      result: comment,
      status: 201,
    });
  }
}
