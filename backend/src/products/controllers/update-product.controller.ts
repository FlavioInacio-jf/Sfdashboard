import { Request, Response } from "express";
import { UpdateProductService } from "../services";

export class UpdateProductController {
  async execute(req: Request, res: Response) {
    const updateProductService = new UpdateProductService();

    const { id } = req.params;
    const { price, title, amount, status } = req.body;

    const product = await updateProductService.execute({
      id,
      price,
      amount,
      status,
      title,
    });

    return res.status(201).json({
      message: "Product updated successfully",
      result: product,
      status: 201,
    });
  }
}
