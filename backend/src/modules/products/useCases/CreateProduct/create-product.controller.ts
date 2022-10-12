import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { CreateProductUseCase } from "./create-product.useCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { title, price, bar_code, amount, status } = req.body;

      const product = await this.createProductUseCase.execute({
        bar_code,
        title,
        price,
        amount,
        status,
      });

      return res.status(201).json({
        title: "Produto criado com sucesso",
        detail: `Produto ${product.title} criado com sucesso`,
        result: product,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
