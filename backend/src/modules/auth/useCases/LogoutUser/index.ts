import { ExpireInProvider, TokenProvider } from "../../../app";
import { RefreshTokenRepository } from "../../repositories";
import { LogoutUserController } from "./logout-user.controller";
import LogoutUserUseCase from "./logout-user.useCase";

const expireInProvider = new ExpireInProvider();
const tokenProvider = new TokenProvider();
const refreshTokenRepository = new RefreshTokenRepository(
  expireInProvider,
  tokenProvider,
);

const logoutUserUseCase = new LogoutUserUseCase(refreshTokenRepository);
const logoutUserController = new LogoutUserController(logoutUserUseCase);

export { logoutUserController, logoutUserUseCase };
