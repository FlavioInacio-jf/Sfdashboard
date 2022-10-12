import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { CreateRefreshTokenUseCase } from "./create-refresh-token.useCase";

export class CreateRefreshTokenController {
  constructor(private createRefreshTokenUseCase: CreateRefreshTokenUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      const { id: user_id } = req.user;
      const [, old_refresh_token] = authHeader.split(" ");

      const tokens = await this.createRefreshTokenUseCase.execute({
        old_refresh_token,
        user_id,
      });

      return res.status(201).json({
        title: "Refresh token criado com sucesso!",
        detail: "Refresh token criado com sucesso!",
        result: tokens,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
