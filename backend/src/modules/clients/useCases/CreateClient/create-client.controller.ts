import { Request, Response } from "express";
import { CustomError } from "../../../app";
import { CreateClientUseCase } from "./create-client.useCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  async execute(req: Request, res: Response) {
    try {
      const { name, email, cpf } = req.body;

      const client = await this.createClientUseCase.execute({
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
