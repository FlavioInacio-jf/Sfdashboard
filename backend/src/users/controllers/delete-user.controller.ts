import { Request, Response } from "express";
import { CustomError } from "../../app";
import { DeleteUserService } from "../services";

export class DeleteUserController {
  async execute(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService();

    try {
      const { id } = req.params;
      const user = await deleteUserService.execute(id);

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
