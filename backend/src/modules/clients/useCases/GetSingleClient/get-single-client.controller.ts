import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { GetSingleClientUseCase } from "./get-single-client.useCase";

export class GetSingleClientController {
  constructor(private getSingleClientUseCase: GetSingleClientUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const client = await this.getSingleClientUseCase.execute({ id });

      return res.status(200).json({ result: client });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
