import { Request, Response } from "express";
import { CustomError } from "../../app";
import { GetAllUsersService } from "../services";

export class GetAllUsersController {
  async execute(req: Request, res: Response) {
    const getAllUsersService = new GetAllUsersService();

    try {
      const { limit } = req.query;
      const limitNumber = parseInt(limit as string, 10);

      const products = await getAllUsersService.execute({
        limit: limitNumber,
      });

      return res.status(200).json({ result: products, limit: limitNumber });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
