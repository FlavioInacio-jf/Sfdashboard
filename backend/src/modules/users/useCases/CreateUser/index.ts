import { HashProvider } from "../../../auth";
import { UsersRepository } from "../../repositories";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "./create-user.useCase";

const hashProvider = new HashProvider();
const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository, hashProvider);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
