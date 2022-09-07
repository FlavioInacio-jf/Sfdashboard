import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";
import { CreateProductService } from "../services";

export class CreateProductController {
  async execute(req: Request, res: Response) {
    const createProductService = new CreateProductService();
    try {
      const { title, price, bar_code, amount, status } = req.body;

      const product = await createProductService.execute({
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
        status: 201,
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
