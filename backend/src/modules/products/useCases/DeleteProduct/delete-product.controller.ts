import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { DeleteProductUseCase } from "./delete-product.useCase";

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const product = await this.deleteProductUseCase.execute({ id });

      return res.status(201).json({
        title: "Produto removido com sucesso",
        detail: `Produto ${product.title} removido com sucesso`,
        result: product,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
