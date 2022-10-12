import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { CreateUserUseCase } from "./create-user.useCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const { name, email, password, role, permissions } = req.body;

      const user = await this.createUserUseCase.execute({
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
