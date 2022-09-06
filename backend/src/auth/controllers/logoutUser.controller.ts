import { Request, Response } from "express";
import LogoutService from "../services/logout.service";

export class LogouUserController {
  async execute(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    const { id: user_id } = req.user;
    const [, refreshToken] = authHeader.split(" ");

    const logoutUserService = new LogoutService();

    await logoutUserService.execute({
      old_refresh_token: refreshToken,
      user_id,
    });

    return res.status(201).json({
      message: "Logout successfully performed",
      result: undefined,
      status: 201,
    });
  }
}
