import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { GetAllUsersService } from "../../services/users/GetAllUsersService";

export class GetAllUsersController {
  async execute(req: Request, res: Response) {
    const getAllUsersService = new GetAllUsersService();

    try {
      const { limit } = req.query;
      const limitNumber = Number(limit);

      const products = await getAllUsersService.execute({
        limit: limitNumber,
      });

      return res.status(200).json({ result: products, limit: limitNumber });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/users");
    }
  }
}
