import { Request, Response } from "express";
import { GetAllProductCommentsService } from "../../services/comments/GetAllProductCommentsService";

export class GetAllProductCommentsController {
  async execute(req: Request, res: Response) {
    const getAllProductCommentsService = new GetAllProductCommentsService();

    const { product_id } = req.params;
    const { limit } = req.query;
    const limitNumber = Number(limit);

    const comments = await getAllProductCommentsService.execute({
      product_id,
      limit: limitNumber,
    });

    return res.status(200).json({ limit: limitNumber || 8, result: comments });
  }
}
