import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { GetAllProductsService } from "../../services/products/GetAllProductsService";

export class GetAllProductsController {
  async execute(req: Request, res: Response) {
    const getAllProdutcsService = new GetAllProductsService();

    try {
      const { id: user_id } = req.user;
      const products = await getAllProdutcsService.execute(user_id);

      return res.status(200).json({ result: products });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/products");
    }
  }
}
