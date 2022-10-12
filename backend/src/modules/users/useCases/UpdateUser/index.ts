import { UsersRepository } from "../../repositories";
import { UpdateUserController } from "./update-user.controller";
import { UpdateUserUseCase } from "./update-user.useCase";

const usersRepository = new UsersRepository();
const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController, updateUserUseCase };
