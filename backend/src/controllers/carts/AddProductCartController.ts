import { Request, Response } from "express";
import { AddProductCartService } from "../../services/carts/AddProductCartService";

export class AddProductCartController {
  async execute(req: Request, res: Response) {
    const addProductCartService = new AddProductCartService();

    const { amount, product_id } = req.body;
    const { id: user_id } = req.user;

    const cart = await addProductCartService.execute({
      user_id,
      amount,
      product_id,
    });

    return res.status(201).json({
      message: "The product has been successfully added to the cart!",
      result: cart,
      status: 201,
    });
  }
}
