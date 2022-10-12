import { ClientsRepository } from "../../repositories";
import { GetAllClientsController } from "./get-all-clients.controller";
import { GetAllClientsUseCase } from "./get-all-clients.useCase";

const clientsRepository = new ClientsRepository();
const getAllClientsUseCase = new GetAllClientsUseCase(clientsRepository);
const getAllClientsController = new GetAllClientsController(
  getAllClientsUseCase,
);

export { getAllClientsController, getAllClientsUseCase };
