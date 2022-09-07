import { Request, Response } from "express";
import { CustomError } from "../../app";
import { UpdateUserService } from "../services";

export class UpdateUserController {
  async execute(req: Request, res: Response) {
    const updateUserService = new UpdateUserService();
    try {
      const { id } = req.params;
      const { name, role, permissions } = req.body;

      const user = await updateUserService.execute({
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
