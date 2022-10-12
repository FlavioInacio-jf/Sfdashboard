import { getCustomRepository } from "typeorm";
import { Client } from "../../app/entities";
import { CustomError } from "../../app/errors";
import { CLIENT_CPF_ALREADY_EXIST } from "../../app/exceptions";
import { ClientsRepository } from "../../app/repositories";
import { IClientRegister } from "../types";

export class CreateClientService {
  async execute({ name, email, cpf }: IClientRegister): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const cpfAlreadyExists = await clientsRepository.findOne({ cpf });

    if (cpfAlreadyExists) {
      throw new CustomError(CLIENT_CPF_ALREADY_EXIST(cpf));
    }

    const client = clientsRepository.create({
      name,
      email,
      cpf,
    });

    await clientsRepository.save(client);

    return client;
  }
}
