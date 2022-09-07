import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";

export class GetCurrentUserController {
  async execute(req: Request, res: Response) {
    try {
      const { user } = req;
      return res.status(200).json({ result: user });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
