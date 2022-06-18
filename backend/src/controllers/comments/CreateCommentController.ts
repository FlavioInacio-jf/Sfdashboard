import { Request, Response } from "express";
import { CreateCommentService } from "../../services/comments/CreateCommentService";

export class CreateCommentController {
  async execute(req: Request, res: Response) {
    const createCommentService = new CreateCommentService();

    const { title, description, product_id } = req.body;
    const { id: user_id } = req.user;

    const comment = await createCommentService.execute({
      user_id,
      title,
      description,
      product_id,
    });

    return res.status(201).json({
      message: "Comment created successfully!",
      result: comment,
      status: 201,
    });
  }
}
