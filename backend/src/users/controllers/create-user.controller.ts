import { Request, Response } from "express";
import { AppError } from "../../app";
import { CreateUserService } from "../services";

export class CreateUserController {
  async execute(req: Request, res: Response) {
    try {
      const { name, email, photo, password, role, permissions } = req.body;
      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        email,
        photo,
        password,
        role,
        permissions,
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
