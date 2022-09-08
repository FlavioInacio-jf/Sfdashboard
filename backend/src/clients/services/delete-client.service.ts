import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { Client } from "../../app/entities";
import { CLIENT_NOT_FOUND } from "../../app/exceptions";
import { ClientsRepository } from "../../app/repositories";

export class DeleteClientService {
  async execute(id: string): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const client = await clientsRepository.findOne({ id });

    if (!client) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    await clientsRepository.delete({ id });
    return client;
  }
}
