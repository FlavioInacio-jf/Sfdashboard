import { Request, Response } from "express";
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
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
