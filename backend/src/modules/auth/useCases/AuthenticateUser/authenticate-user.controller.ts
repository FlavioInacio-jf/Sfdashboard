import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { AuthenticateUserUseCase } from "./authenticate-user.useCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const token = await this.authenticateUserUseCase.execute({
        email,
        password,
      });
      return res.status(201).json({
        title: "Login realizado com sucesso!",
        detail: "Login realizado com sucesso!",
        result: token,
      });
    } catch (error) {
      console.error(error);
      throw new CustomError(error);
    }
  }
}
