import { Client } from "../entities";

export class IClientsRepository {
  update: (data: Client) => Promise<void>;
  findById: (id: string) => Promise<Client | undefined>;
}
