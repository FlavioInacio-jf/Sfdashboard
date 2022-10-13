import { UsersRepository } from "../../repositories";
import { GetAllUsersController } from "./get-all-users.controller";
import { GetAllUsersUseCase } from "./get-all-users.useCase";

const usersRepository = new UsersRepository();
const getAllUsersUseCase = new GetAllUsersUseCase(usersRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export { getAllUsersController, getAllUsersUseCase };
