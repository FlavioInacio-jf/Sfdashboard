import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/authenticate/AuthenticateUserService";

export class AuthenticateUserController {
  async execute(req: Request, res: Response): Promise<Response> {
    const authenticateUserService = new AuthenticateUserService();

    const { email, password } = req.body;
    const token = await authenticateUserService.execute({
      email,
      password,
    });
    return res.status(201).json({
      message: "Login successfully performed!",
      result: token,
      status: 201,
    });
  }
}
