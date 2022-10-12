import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { DeleteUserUseCase } from "./delete-user.useCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.deleteUserUseCase.execute(id);

      return res.status(201).json({
        title: "Usuário removido com sucesso",
        detail: `Usuário ${user.name} removido com sucesso`,
        result: user,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
