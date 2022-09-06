import { Request, Response } from "express";
import { AppError } from "../../app";
import { GetAllProductsService } from "../services";

export class GetAllProductsController {
  async execute(req: Request, res: Response) {
    const getAllProdutcsService = new GetAllProductsService();

    try {
      const { limit } = req.query;
      const limitNumber = Number(limit);

      const products = await getAllProdutcsService.execute({
        limit: limitNumber,
      });

      return res
        .status(200)
        .json({ limit: limitNumber || 8, result: products });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/products");
    }
  }
}
