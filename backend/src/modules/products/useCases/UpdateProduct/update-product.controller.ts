import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { UpdateProductUseCase } from "./update-product.useCase";

export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { price, title, amount, status } = req.body;

      const product = await this.updateProductUseCase.execute({
        id,
        price,
        amount,
        status,
        title,
      });

      return res.status(201).json({
        title: "Produto atualizado com sucesso",
        detail: `Produto ${product.title} atualizado com sucesso`,
        result: product,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
