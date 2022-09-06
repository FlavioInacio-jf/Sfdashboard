import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { CreateProductService } from "../services";

export class CreateProductController {
  async execute(req: Request, res: Response) {
    const createProductService = new CreateProductService();
    try {
      const { title, price, bar_code, amount, status } = req.body;

      const product = await createProductService.execute({
        bar_code,
        title,
        price,
        amount,
        status,
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
