import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { GetAllUsersUseCase } from "./get-all-users.useCase";

export class GetAllUsersController {
  constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { query } = req;

      const products = await this.getAllUsersUseCase.execute({
        ...query,
      });

      return res.status(200).json({ result: products });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
