import { Request, Response } from "express";
import { CustomError } from "../../app";
import { GetSingleClientService } from "../services";

export class GetSingleClientController {
  async execute(req: Request, res: Response) {
    const getSingleClientService = new GetSingleClientService();

    try {
      const { id } = req.params;
      const client = await getSingleClientService.execute({ id });

      return res.status(200).json({ result: client });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
