import { UsersRepository } from "../../../users/repositories";
import { TokenProvider } from "../../providers";
import { EnsureAuthenticated } from "./ensure-authenticated.middleware";

const tokenProvider = new TokenProvider();
const usersRepository = new UsersRepository();
const ensureAuthenticated = new EnsureAuthenticated(
  usersRepository,
  tokenProvider,
);

export { ensureAuthenticated };
