import { Router } from "express";
import {
  AuthenticateUserController,
  CreateRefreshTokenController,
  LogouUserController,
} from "../controllers";

import { EnsureAuthenticated, validateResource } from "../../app";
import { createSchema } from "../schemas";

const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const createRefreshTokenController = new CreateRefreshTokenController();
const logoutUserController = new LogouUserController();
const ensureAuthenticated = new EnsureAuthenticated();

/** The user registration route does not have the token as mandatory */
authRoutes.post(
  "/login",
  validateResource(createSchema),
  authenticateUserController.execute,
);

/** Users need to have the authentication token to access these routes */

authRoutes.use(ensureAuthenticated.execute);
authRoutes.post("/refresh-token", createRefreshTokenController.execute);
authRoutes.post("/logout", logoutUserController.execute);

export { authRoutes };