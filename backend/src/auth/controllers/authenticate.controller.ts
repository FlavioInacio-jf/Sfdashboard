import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
import { CustomError } from "../../app";
import { AuthenticateUserService } from "../services";

export class AuthenticateUserController {
  async execute(req: Request, res: Response): Promise<Response> {
    const authenticateUserService = new AuthenticateUserService();

    try {
      const { email, password } = req.body;
      const token = await authenticateUserService.execute({
        email,
        password,
      });
      return res.status(201).json({
        title: "Login realizado com sucesso!",
        detail: "Login realizado com sucesso!",
        result: token,
        status: 201,
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
