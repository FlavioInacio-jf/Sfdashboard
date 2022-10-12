import { Client } from "../../entities";
import { IClientsRepository } from "../IClients.repository";

export class ClientsRepository implements IClientsRepository {
  update: (data: Client) => Promise<void>;
  findById: (id: string) => Promise<Client>;
}
