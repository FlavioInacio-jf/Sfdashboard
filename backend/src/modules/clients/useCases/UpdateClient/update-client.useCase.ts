import { CustomError } from "../../../app";
import { CLIENT_NOT_FOUND } from "../../../app/exceptions";
import { IUpdateClientRequestDTO } from "../../dtos";
import { Client } from "../../entities";
import { IClientsRepository } from "../../repositories";

export class UpdateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  async execute({ id, name, email }: IUpdateClientRequestDTO): Promise<Client> {
    const client = await this.clientsRepository.findById(id);

    if (!client) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    client.name = name || client.name;
    client.email = email || client.email;

    await this.clientsRepository.update(client);

    return client;
  }
}
