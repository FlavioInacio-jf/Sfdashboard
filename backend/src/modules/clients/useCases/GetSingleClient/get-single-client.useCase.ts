import { CustomError } from "../../../app";
import { CLIENT_NOT_FOUND } from "../../../app/exceptions";
import { IGetSingleClientRequestDTO } from "../../dtos";
import { Client } from "../../entities";
import { IClientsRepository } from "../../repositories";

export class GetSingleClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  async execute({ id }: IGetSingleClientRequestDTO): Promise<Client> {
    const client = await this.clientsRepository.findById(id);

    if (!client) {
      throw new CustomError(CLIENT_NOT_FOUND);
    }

    return client;
  }
}
