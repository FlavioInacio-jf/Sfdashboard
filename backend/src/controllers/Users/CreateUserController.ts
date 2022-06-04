import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { CreateUserService } from "../../services/users/CreateUserService";

export class CreateUserController {
  async execute(req: Request, res: Response) {
    try {
      const { name, username, photo_url, password, role } = req.body;
      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        username,
        photo_url,
        password,
        role,
      });

      return res.status(201).json({
        message: "User created successfully",
        result: user,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 409, "/users");
    }
  }
}
