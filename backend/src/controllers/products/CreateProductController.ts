import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { CreateProductService } from "../../services/products/CreateProductService";

export class CreateProductController {
  async execute(req: Request, res: Response) {
    const createProductService = new CreateProductService();
    try {
      const { name, price, description, amount, photo_url, category } =
        req.body;
      const { id: user_id } = req.user;

      const product = await createProductService.execute({
        user_id,
        name,
        price,
        description,
        amount,
        photo_url,
        category,
      });

      return res.status(201).json({
        message: "Product created successfully",
        result: product,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 409, "/products");
    }
  }
}
