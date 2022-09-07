import { Request, Response } from "express";
import { CustomError } from "../../app";
import { GetAllProductsService } from "../services";

export class GetAllProductsController {
  async execute(req: Request, res: Response) {
    const getAllProdutcsService = new GetAllProductsService();

    try {
      const { limit } = req.query;
      const limitNumber = parseInt(limit as string, 10);

      const products = await getAllProdutcsService.execute({
        limit: limitNumber,
      });

      return res
        .status(200)
        .json({ limit: limitNumber || 8, result: products });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
