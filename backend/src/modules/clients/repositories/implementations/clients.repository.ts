import { getRepository, Repository } from "typeorm";
import { ICreateClientRequestDTO, IDeleteClientRequestDTO } from "../../dtos";
import { IQueryClientRequestDTO } from "../../dtos/query-client-request.dto";
import { Client } from "../../entities";
import { IClientsRepository } from "../IClients.repository";

export class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }
  async create(data: ICreateClientRequestDTO): Promise<Client> {
    const client = this.repository.create(data);
    await this.repository.save(client);
    return client;
  }
  async delete({ id }: IDeleteClientRequestDTO): Promise<void> {
    await this.repository.delete(id);
  }
  async findByCPF(cpf: string): Promise<Client | undefined> {
    const client = await this.repository.findOne({ where: { cpf } });

    return client;
  }
  async findAll({
    limit,
    page,
    ...filters
  }: IQueryClientRequestDTO): Promise<Client[]> {
    const clients = await this.repository.find({
      take: limit,
      skip: page,
      where: { ...filters },
    });
    return clients;
  }
  async findById(id: string): Promise<Client | undefined> {
    const client = await this.repository.findOne({ where: { id } });
    return client;
  }
  async update(data: Client): Promise<void> {
    await this.repository.save(data);
  }
}
