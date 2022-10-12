import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { BuyProductUseCase } from "./buy-product.useCase";

export class BuyProductController {
  constructor(private buyProductUseCase: BuyProductUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id: product_id } = req.params;
      const { amount, client_id } = req.body;
      const { id: user_id } = req.user;

      const transaction = await this.buyProductUseCase.execute({
        amount,
        client_id,
        product_id,
        user_id,
      });

      return res.status(201).json({
        title: "A compra do produto foi realizado com sucesso",
        detail: "A compra do produto foi realizado com sucesso",
        result: transaction,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
