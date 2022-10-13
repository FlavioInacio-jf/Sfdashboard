import { UsersRepository } from "../../../users/repositories";
import { TokenProvider } from "../../providers";
import { EnsureAuthenticated } from "./ensure-authenticated.middleware";

const usersRepository = new UsersRepository();
const tokenProvider = new TokenProvider();
const ensureAuthenticated = new EnsureAuthenticated(
  usersRepository,
  tokenProvider,
);

export { ensureAuthenticated };
