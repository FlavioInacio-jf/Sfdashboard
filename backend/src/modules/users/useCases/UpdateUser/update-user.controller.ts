import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { UpdateUserUseCase } from "./update-user.useCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, role, permissions } = req.body;

      const user = await this.updateUserUseCase.execute({
        id,
        name,
        role,
        permissions,
      });

      return res.status(200).json({
        title: "Usuário atualizado com sucesso",
        detail: `Usuário ${user.name} atualizado com sucesso`,
        result: user,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
