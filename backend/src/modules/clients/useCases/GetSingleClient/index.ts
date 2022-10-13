import { ClientsRepository } from "../../repositories";
import { GetSingleClientController } from "./get-single-client.controller";
import { GetSingleClientUseCase } from "./get-single-client.useCase";

const clientsRepository = new ClientsRepository();
const getSingleClientUseCase = new GetSingleClientUseCase(clientsRepository);
const getSingleClientController = new GetSingleClientController(
  getSingleClientUseCase,
);

export { getSingleClientController, getSingleClientUseCase };
