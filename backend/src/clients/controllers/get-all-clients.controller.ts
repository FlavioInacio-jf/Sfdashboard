import { Request, Response } from "express";
import { CustomError } from "../../app";
import { GetAllClientsService } from "../services";

export class GetAllClientsController {
  async execute(req: Request, res: Response) {
    const getAllClientsService = new GetAllClientsService();

    try {
      const { limit } = req.query;
      const limitNumber = parseInt(limit as string, 10);

      const clients = await getAllClientsService.execute({
        limit: limitNumber,
      });

      return res.status(200).json({ result: clients, limit: limitNumber });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
