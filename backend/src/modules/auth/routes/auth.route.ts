import { Router } from "express";
import { EnsureAuthenticated, validateResource } from "../../app";
import { authenticateUserSchema } from "../schemas";

const authRoutes = Router();

const ensureAuthenticated = new EnsureAuthenticated();

/** The user registration route does not have the token as mandatory */
authRoutes.post(
  "/login",
  validateResource(authenticateUserSchema),
  authenticateUserController.execute,
);

/** Users need to have the authentication token to access these routes */

authRoutes.use(ensureAuthenticated.execute);
authRoutes.post("/refresh-token", createRefreshTokenController.execute);
authRoutes.post("/logout", logoutUserController.execute);

export { authRoutes };
