import { Request, Response } from "express";
import { AppError } from "../../app";

export class GetCurrentUserController {
  async execute(req: Request, res: Response) {
    try {
      const { user } = req;
      return res.status(200).json({ result: user });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/users/me");
    }
  }
}
