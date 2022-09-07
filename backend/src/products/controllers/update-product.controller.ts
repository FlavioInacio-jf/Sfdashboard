import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";
import { UpdateProductService } from "../services";

export class UpdateProductController {
  async execute(req: Request, res: Response) {
    const updateProductService = new UpdateProductService();

    try {
      const { id } = req.params;
      const { price, title, amount, status } = req.body;

      const product = await updateProductService.execute({
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
        status: 201,
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}