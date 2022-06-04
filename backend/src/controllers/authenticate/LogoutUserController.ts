import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import LogoutUserService from "../../services/authenticate/LogoutUserService";

export class LogouUserController {
  async execute(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      const { id: user_id } = req.user;
      const [, refreshToken] = authHeader.split(" ");

      const logoutUserService = new LogoutUserService();

      await logoutUserService.execute({
        old_refresh_token: refreshToken,
        user_id,
      });

      return res.status(201).json({
        message: "Logout successfully performed",
        result: {},
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/auth/logout");
    }
  }
}
