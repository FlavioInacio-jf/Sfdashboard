import { Request, Response } from "express";
import { DeleteProductService } from "../services";

export class DeleteProductController {
  async execute(req: Request, res: Response) {
    const deleteProductService = new DeleteProductService();

    const { id } = req.params;
    const { id: user_id } = req.user;

    const product = await deleteProductService.execute({ id, user_id });

    return res.status(201).json({
      message: "Product removed successfully!",
      result: product,
      status: 201,
    });
  }
}
