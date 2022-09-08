import { Request, Response } from "express";
import { CustomError } from "../../app";
import { DeleteClientService } from "../services";

export class DeleteClientController {
  async execute(req: Request, res: Response) {
    const deleteClientService = new DeleteClientService();

    try {
      const { id } = req.params;
      const client = await deleteClientService.execute(id);

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
