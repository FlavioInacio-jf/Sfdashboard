import { Request, Response } from "express";
import { CustomError } from "../../app";
import { CreateUserService } from "../services";

export class CreateUserController {
  async execute(req: Request, res: Response) {
    try {
      const { name, email, password, role, permissions } = req.body;
      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        email,
        password,
        role,
        permissions,
      });

      return res.status(201).json({
        title: "Usuário criado com sucesso",
        detail: `Usuário ${user.name} criado com sucesso`,
        result: user,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
