import { Request, Response } from "express";
import { GetAllProductsCartService } from "../../services/carts/GetAllProductsCartService";

export class GetAllProductsCartController {
  async execute(req: Request, res: Response) {
    const getAllProdutcsCartService = new GetAllProductsCartService();

    const { id: user_id } = req.user;
    const { limit } = req.query;
    const limitNumber = Number(limit);

    const productsInCart = await getAllProdutcsCartService.execute({
      user_id,
      limit: limitNumber,
    });

    return res
      .status(200)
      .json({ limit: limitNumber || 8, result: productsInCart });
  }
}
