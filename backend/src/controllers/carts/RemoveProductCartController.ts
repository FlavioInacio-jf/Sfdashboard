import { Request, Response } from "express";
import { RemoveProductCartService } from "../../services/carts/RemoveProductCartService";

export class RemoveProductCartController {
  async execute(req: Request, res: Response) {
    const removeProductCartService = new RemoveProductCartService();

    const { id } = req.params;
    const { id: user_id } = req.user;

    const productInCart = await removeProductCartService.execute({
      id,
      user_id,
    });

    return res.status(201).json({
      message: "Product successfully removed from cart!",
      result: productInCart,
      status: 201,
    });
  }
}
