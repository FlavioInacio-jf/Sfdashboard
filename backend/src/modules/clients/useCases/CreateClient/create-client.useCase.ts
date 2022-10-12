import { CustomError } from "../../../app/errors";
import { CLIENT_CPF_ALREADY_EXIST } from "../../../app/exceptions";
import { ICreateClientRequestDTO } from "../../dtos";
import { Client } from "../../entities";
import { IClientsRepository } from "../../repositories";

export class CreateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  async execute({
    name,
    email,
    cpf,
  }: ICreateClientRequestDTO): Promise<Client> {
    const cpfAlreadyExists = await this.clientsRepository.findByCPF(cpf);

    if (cpfAlreadyExists) {
      throw new CustomError(CLIENT_CPF_ALREADY_EXIST(cpf));
    }

    const client = this.clientsRepository.create({
      name,
      email,
      cpf,
    });

    return client;
  }
}
