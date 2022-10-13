import { Request, Response } from "express";
import { CustomError } from "../../../app";
import LogoutUserUseCase from "./logout-user.useCase";

export class LogoutUserController {
  constructor(private logoutUserUseCase: LogoutUserUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      const { id: user_id } = req.user;
      const [, refreshToken] = authHeader.split(" ");

      await this.logoutUserUseCase.execute({
        old_refresh_token: refreshToken,
        user_id,
      });

      return res.status(201).json({
        title: "Logout realizado com sucesso",
        detailt: "Logout realizado com sucesso",
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
