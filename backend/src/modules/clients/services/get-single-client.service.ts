import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { Client } from "../../app/entities";
import { CLIENT_NOT_FOUND } from "../../app/exceptions";
import { ClientsRepository } from "../../app/repositories";

interface IGetSingleClientRequest {
  id: string;
}

export class GetSingleClientService {
  async execute({ id }: IGetSingleClientRequest): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const client = await clientsRepository.findOne(id, {
      select: ["id", "name", "email", "created_at"],
    });

    if (!client) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    return client;
  }
}
