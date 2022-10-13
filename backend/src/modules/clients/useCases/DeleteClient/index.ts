import { ClientsRepository } from "../../repositories";
import { DeleteClientController } from "./delete-client.controller";
import { DeleteClientUseCase } from "./delete-client.useCase";

const clientsRepository = new ClientsRepository();
const deleteClientUseCase = new DeleteClientUseCase(clientsRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientController, deleteClientUseCase };
