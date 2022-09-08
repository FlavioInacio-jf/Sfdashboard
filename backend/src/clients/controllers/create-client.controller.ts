import { Request, Response } from "express";
import { CustomError } from "../../app";
import { CreateClientService } from "../services";

export class CreateClientController {
  async execute(req: Request, res: Response) {
    try {
      const { name, email, cpf } = req.body;
      const createClientService = new CreateClientService();

      const client = await createClientService.execute({
        name,
        email,
        cpf,
      });

      return res.status(201).json({
        title: "Cliente cadastrado com sucesso",
        detail: `Cliente ${client.name} cadastrado com sucesso`,
        result: client,
      });
    } catch (error) {
      throw new CustomError(error);
    }
  }
}
