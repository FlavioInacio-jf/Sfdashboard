/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities";

@EntityRepository(Client)
export class ClientsRepository extends Repository<Client> {}
