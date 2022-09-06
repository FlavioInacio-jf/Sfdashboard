import { Request, Response } from "express";
import { UpdateProductService } from "../services";

export class UpdateProductController {
  async execute(req: Request, res: Response) {
    const updateProductService = new UpdateProductService();

    const { id } = req.params;
    const { id: user_id } = req.user;
    const {
      price,
      description,
      amount,
      photo,
      category,
      physical_condition,
      status,
    } = req.body;

    const product = await updateProductService.execute({
      user_id,
      id,
      price,
      description,
      amount,
      photo,
      category,
      physical_condition,
      status,
    });

    return res.status(201).json({
      message: "Product updated successfully",
      result: product,
      status: 201,
    });
  }
}
