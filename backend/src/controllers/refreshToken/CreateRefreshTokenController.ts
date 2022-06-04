import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import CreateRefreshTokenService from "../../services/refreshToken/CreateRefreshTokenService";
import { takeIdFromAuthHeaders } from "../../utils/takeIdFromAuthHeaders";

export class CreateRefreshTokenController {
  async execute(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      const user_id = takeIdFromAuthHeaders(authHeader);
      const [, old_refresh_token] = authHeader.split(" ");

      const createRefreshTokenService = new CreateRefreshTokenService();

      const tokens = await createRefreshTokenService.execute({
        old_refresh_token,
        user_id,
      });

      return res.status(201).json({
        message: "Refresh token created successfully",
        result: tokens,
        status: 201,
      });
    } catch (error) {
      throw new AppError(
        error.detail || error.message,
        400,
        "/auth/refresh-token",
      );
    }
  }
}
