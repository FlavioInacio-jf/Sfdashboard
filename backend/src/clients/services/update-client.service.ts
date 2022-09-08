import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { Client } from "../../app/entities";
import { CLIENT_NOT_FOUND } from "../../app/exceptions";
import { ClientsRepository } from "../../app/repositories";
import { IClientUpdate } from "../types";

export class UpdateClientService {
  async execute({ id, name, email }: IClientUpdate): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const client = await clientsRepository.findOne({ id });

    if (!client) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    client.name = name || client.name;
    client.email = email || client.email;

    await clientsRepository.save(client);

    return client;
  }
}
