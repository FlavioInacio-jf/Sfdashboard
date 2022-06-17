import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { GetAllAddressesService } from "../../services/addresses/GetAllAddressesService";

export class GetAllAddressesController {
  async execute(req: Request, res: Response) {
    const getAllAddressesService = new GetAllAddressesService();

    try {
      const { id: user_id } = req.user;
      const { limit } = req.query;
      const limitNumber = Number(limit);

      const addresses = await getAllAddressesService.execute({
        user_id,
        limit: limitNumber,
      });

      return res
        .status(200)
        .json({ limit: limitNumber || 8, result: addresses });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/addresses");
    }
  }
}
