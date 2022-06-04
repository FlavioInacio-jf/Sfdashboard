import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { AuthenticateUserService } from "../../services/authenticate/AuthenticateUserService";

export class AuthenticateUserController {
  // eslint-disable-next-line consistent-return
  async execute(req: Request, res: Response): Promise<Response> {
    const authenticateUserService = new AuthenticateUserService();

    try {
      const { username, password } = req.body;
      const token = await authenticateUserService.execute({
        username,
        password,
      });
      return res.status(201).json({
        message: "Login successfully performed",
        result: token,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 401, "/auth");
    }
  }
}
