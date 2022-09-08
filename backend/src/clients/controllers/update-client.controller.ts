import { Request, Response } from "express";
import { CustomError } from "../../app";
import { UpdateClientService } from "../services";

export class UpdateClientController {
  async execute(req: Request, res: Response) {
    const updateClientService = new UpdateClientService();
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const client = await updateClientService.execute({
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
