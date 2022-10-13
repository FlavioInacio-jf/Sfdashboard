/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { GetAllProductsUseCase } from "./get-all-products.useCase";

export class GetAllProductsController {
  constructor(private getAllProductsUseCase: GetAllProductsUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { query } = req;

      const products = await this.getAllProductsUseCase.execute({
        ...(query as any),
      });

      return res.status(200).json({ result: products });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
