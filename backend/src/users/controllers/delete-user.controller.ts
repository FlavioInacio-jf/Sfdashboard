import { Request, Response } from "express";
import { QueryFailedError } from "typeorm";
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
        status: 201,
      });
    } catch (error) {
      const err = error as QueryFailedError;
      throw new CustomError({ title: err.message });
    }
  }
}
