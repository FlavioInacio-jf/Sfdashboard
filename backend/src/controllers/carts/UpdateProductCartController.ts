import { Request, Response } from "express";
import { UpdateProductCartService } from "../../services/carts/UpdateProductCartService";

export class UpdateProductCartController {
  async execute(req: Request, res: Response) {
    const updateProductCartService = new UpdateProductCartService();

    const { id } = req.params;
    const { id: user_id } = req.user;
    const { amount } = req.body;

    const productInCart = await updateProductCartService.execute({
      user_id,
      id,
      amount,
    });

    return res.status(201).json({
      message: "The product in the cart has been updated successfully!",
      result: productInCart,
      status: 201,
    });
  }
}
