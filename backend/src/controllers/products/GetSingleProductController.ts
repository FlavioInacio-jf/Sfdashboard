import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { GetSingleProductService } from "../../services/products/GetSingleProductService";

export class GetSingleProductController {
  async execute(req: Request, res: Response) {
    const getSingleProductService = new GetSingleProductService();

    try {
      const { id } = req.params;
      const { id: user_id } = req.user;
      const product = await getSingleProductService.execute({ id, user_id });

      return res.status(200).json({ result: product });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/products");
    }
  }
}
