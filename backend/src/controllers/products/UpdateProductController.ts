import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { UpdateProductService } from "../../services/products/UpdateProductService";

export class UpdateProductController {
  async execute(req: Request, res: Response) {
    const updateProductService = new UpdateProductService();
    try {
      const { id } = req.params;
      const { id: user_id } = req.user;
      const { name, price, description, amount, photo_url, category } =
        req.body;

      const product = await updateProductService.execute({
        user_id,
        id,
        name,
        price,
        description,
        amount,
        photo_url,
        category,
      });

      return res.status(201).json({
        message: "Product updated successfully",
        result: product,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/products");
    }
  }
}
