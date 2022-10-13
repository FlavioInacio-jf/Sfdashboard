import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { GetAllClientsUseCase } from "./get-all-clients.useCase";

export class GetAllClientsController {
  constructor(private getAllClientsUseCase: GetAllClientsUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { limit } = req.query;
      const limitNumber = parseInt(limit as string, 10);

      const clients = await this.getAllClientsUseCase.execute({
        limit: limitNumber,
      });

      return res.status(200).json({ result: clients, limit: limitNumber });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
