import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";
import { CreateRefreshTokenService } from "../services/index";

export class CreateRefreshTokenController {
  async execute(req: Request, res: Response) {
    const createRefreshTokenService = new CreateRefreshTokenService();

    try {
      const authHeader = req.headers.authorization;
      const { id: user_id } = req.user;
      const [, old_refresh_token] = authHeader.split(" ");

      const tokens = await createRefreshTokenService.execute({
        old_refresh_token,
        user_id,
      });

      return res.status(201).json({
        title: "Refresh token criado com sucesso!",
        detail: "Refresh token criado com sucesso!",
        result: tokens,
        status: 201,
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
