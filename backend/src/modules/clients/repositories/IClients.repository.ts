import { ICreateClientRequestDTO, IDeleteClientRequestDTO } from "../dtos";
import { IQueryClientRequestDTO } from "../dtos/query-client-request.dto";
import { Client } from "../entities";

export class IClientsRepository {
  create: (data: ICreateClientRequestDTO) => Promise<Client>;
  update: (data: Client) => Promise<void>;
  delete: (data: IDeleteClientRequestDTO) => Promise<void>;
  findById: (id: string) => Promise<Client | undefined>;
  findByCPF: (cpf: string) => Promise<Client | undefined>;
  findAll: (query: IQueryClientRequestDTO) => Promise<Client[]>;
}
