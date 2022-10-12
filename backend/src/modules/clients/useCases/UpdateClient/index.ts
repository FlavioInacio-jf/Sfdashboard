import { ClientsRepository } from "../../repositories";
import { UpdateClientController } from "./update-client.controller";
import { UpdateClientUseCase } from "./update-client.useCase";

const clientsRepository = new ClientsRepository();
const updateClientUseCase = new UpdateClientUseCase(clientsRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController, updateClientUseCase };
