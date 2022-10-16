import { Router } from "express";
import { ensureAuthenticated, validateResource } from "../../app";
import { authenticateUserSchema } from "../schemas";
import {
  authenticateUserController,
  createRefreshTokenController,
  logoutUserController,
} from "../useCases";

const authRoutes = Router();

/** The user registration route does not have the token as mandatory */
authRoutes.post(
  "/login",
  validateResource(authenticateUserSchema),
  authenticateUserController.execute.bind(authenticateUserController),
);

/** Users need to have the authentication token to access these routes */

authRoutes.use(ensureAuthenticated.execute.bind(ensureAuthenticated));
authRoutes.post(
  "/refresh-token",
  createRefreshTokenController.execute.bind(createRefreshTokenController),
);
authRoutes.post(
  "/logout",
  logoutUserController.execute.bind(logoutUserController),
);

export { authRoutes };
