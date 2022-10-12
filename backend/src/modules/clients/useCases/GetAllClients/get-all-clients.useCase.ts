import { IQueryClientRequestDTO } from "../../dtos/query-client-request.dto";
import { Client } from "../../entities";
import { IClientsRepository } from "../../repositories";

export class GetAllClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  async execute({
    limit = 12,
    page = 1,
    ...query
  }: IQueryClientRequestDTO): Promise<Client[]> {
    const clients = await this.clientsRepository.findAll({
      limit,
      page,
      ...query,
    });
    return clients;
  }
}
