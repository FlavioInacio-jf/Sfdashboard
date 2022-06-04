import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { DeleteProductService } from "../../services/products/DeleteProductService";

export class DeleteProductController {
  async execute(req: Request, res: Response) {
    const deleteProductService = new DeleteProductService();

    try {
      const { id } = req.params;
      const { id: user_id } = req.user;

      const product = await deleteProductService.execute({ id, user_id });

      return res.status(201).json({
        message: "Product removed successfully",
        result: product,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/products");
    }
  }
}
