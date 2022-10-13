import { CustomError } from "../../../app";
import { CLIENT_NOT_FOUND } from "../../../app/exceptions";
import { Client } from "../../entities";
import { IClientsRepository } from "../../repositories";

export class DeleteClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  async execute(id: string): Promise<Client> {
    const client = await this.clientsRepository.findById(id);

    if (!client) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    await this.clientsRepository.delete({ id });
    return client;
  }
}
