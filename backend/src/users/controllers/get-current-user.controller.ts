import { Request, Response } from "express";
import { CustomError } from "../../app";

export class GetCurrentUserController {
  async execute(req: Request, res: Response) {
    try {
      const { user } = req;
      return res.status(200).json({ result: user });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
