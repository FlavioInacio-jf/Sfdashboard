import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { GetAllProductCommentsService } from "../../services/comments/GetAllProductCommentsService";

export class GetAllProductCommentsController {
  async execute(req: Request, res: Response) {
    const getAllProductCommentsService = new GetAllProductCommentsService();

    try {
      const { product_id } = req.params;
      const { limit } = req.query;
      const limitNumber = Number(limit);

      const comments = await getAllProductCommentsService.execute({
        product_id,
        limit: limitNumber,
      });

      return res
        .status(200)
        .json({ limit: limitNumber || 8, result: comments });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/comments");
    }
  }
}
