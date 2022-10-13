import { ClientsRepository } from "../../repositories";
import { CreateClientController } from "./create-client.controller";
import { CreateClientUseCase } from "./create-client.useCase";

const clientsRepository = new ClientsRepository();
const createClientUseCase = new CreateClientUseCase(clientsRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController, createClientUseCase };
