import { UsersRepository } from "../../repositories";
import { DeleteUserController } from "./delete-user.controller";
import { DeleteUserUseCase } from "./delete-user.useCase";

const usersRepository = new UsersRepository();
const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController, deleteUserUseCase };
