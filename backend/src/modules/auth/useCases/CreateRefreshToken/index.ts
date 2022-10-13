import { ExpireInProvider, TokenProvider } from "../../../app";
import { RefreshTokenRepository } from "../../repositories";
import { CreateRefreshTokenController } from "./create-refresh-token.controller";
import { CreateRefreshTokenUseCase } from "./create-refresh-token.useCase";

const expireInProvider = new ExpireInProvider();
const tokenProvider = new TokenProvider();

const refreshTokenRepository = new RefreshTokenRepository(
  expireInProvider,
  tokenProvider,
);

const createRefreshTokenUseCase = new CreateRefreshTokenUseCase(
  refreshTokenRepository,
  expireInProvider,
  tokenProvider,
);
const createRefreshTokenController = new CreateRefreshTokenController(
  createRefreshTokenUseCase,
);

export { createRefreshTokenController, createRefreshTokenUseCase };
