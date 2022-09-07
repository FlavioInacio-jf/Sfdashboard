import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";
import { DeleteProductService } from "../services";

export class DeleteProductController {
  async execute(req: Request, res: Response) {
    const deleteProductService = new DeleteProductService();

    try {
      const { id } = req.params;

      const product = await deleteProductService.execute({ id });

      return res.status(201).json({
        title: "Produto removido com sucesso",
        detail: `Produto ${product.title} removido com sucesso`,
        result: product,
        status: 201,
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
