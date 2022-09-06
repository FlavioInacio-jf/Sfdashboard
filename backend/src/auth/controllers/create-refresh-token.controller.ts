import { Request, Response } from "express";
import { CreateRefreshTokenService } from "../services/index";

export class CreateRefreshTokenController {
  async execute(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    const { id: user_id } = req.user;
    const [, old_refresh_token] = authHeader.split(" ");

    const createRefreshTokenService = new CreateRefreshTokenService();

    const tokens = await createRefreshTokenService.execute({
      old_refresh_token,
      user_id,
    });

    return res.status(201).json({
      message: "Refresh token created successfully!",
      result: tokens,
      status: 201,
    });
  }
}
