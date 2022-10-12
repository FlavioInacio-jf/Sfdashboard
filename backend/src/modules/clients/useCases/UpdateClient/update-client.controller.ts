import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { UpdateClientUseCase } from "./update-client.useCase";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const client = await this.updateClientUseCase.execute({
        id,
        name,
        email,
      });

      return res.status(200).json({
        title: "Cliente atualizado com sucesso",
        detail: `Cliente ${client.name} atualizado com sucesso`,
        result: client,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
