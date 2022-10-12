import { UsersRepository } from "../../repositories";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "./create-user.useCase";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
