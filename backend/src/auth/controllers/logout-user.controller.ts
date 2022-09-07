import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";
import LogoutService from "../services/logout.service";

export class LogouUserController {
  async execute(req: Request, res: Response) {
    const logoutUserService = new LogoutService();

    try {
      const authHeader = req.headers.authorization;
      const { id: user_id } = req.user;
      const [, refreshToken] = authHeader.split(" ");

      await logoutUserService.execute({
        old_refresh_token: refreshToken,
        user_id,
      });

      return res.status(201).json({
        title: "Logout realizado com sucesso",
        detailt: "Logout realizado com sucesso",
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
