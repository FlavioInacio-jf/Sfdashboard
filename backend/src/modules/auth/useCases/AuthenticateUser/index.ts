import { ExpireInProvider, HashProvider, TokenProvider } from "../../../app";
import { UsersRepository } from "../../../users/repositories";

import { RefreshTokenRepository } from "../../repositories";
import { AuthenticateUserController } from "./authenticate-user.controller";
import { AuthenticateUserUseCase } from "./authenticate-user.useCase";

const expireInProvider = new ExpireInProvider();
const tokenProvider = new TokenProvider();

const refreshTokenRepository = new RefreshTokenRepository(
  expireInProvider,
  tokenProvider,
);
const usersRepository = new UsersRepository();
const hashProvider = new HashProvider();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  refreshTokenRepository,
  usersRepository,
  tokenProvider,
  hashProvider,
);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
);
export { authenticateUserController, authenticateUserUseCase };
