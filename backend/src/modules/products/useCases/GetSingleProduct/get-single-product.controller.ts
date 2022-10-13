import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { GetSingleProductUseCase } from "./get-single-product.useCase";

export class GetSingleProductController {
  constructor(private getSingleProductUseCase: GetSingleProductUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await this.getSingleProductUseCase.execute({ id });

      return res.status(200).json({ result: product });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
