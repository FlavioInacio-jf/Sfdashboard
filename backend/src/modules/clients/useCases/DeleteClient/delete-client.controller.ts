import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { DeleteClientUseCase } from "./delete-client.useCase";

export class DeleteClientController {
  constructor(private deleteClientUseCase: DeleteClientUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const client = await this.deleteClientUseCase.execute(id);

      return res.status(201).json({
        title: "Cliente removido com sucesso",
        detail: `Cliente ${client.name} removido com sucesso`,
        result: client,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
