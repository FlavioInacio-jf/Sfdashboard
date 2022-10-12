import { getCustomRepository } from "typeorm";
import { Client } from "../../app/entities";
import { ClientsRepository } from "../../app/repositories";

interface IAllClientRequest {
  limit?: number;
}
export class GetAllClientsService {
  async execute({ limit = 7 }: IAllClientRequest): Promise<Client[]> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const clients = await clientsRepository.find({
      select: ["id", "name", "email", "created_at"],
      take: limit,
    });
    return clients;
  }
}
