import { Router } from "express";
import { AuthenticateUserController } from "../../controllers/authenticate/AuthenticateUserController";
import { LogouUserController } from "../../controllers/authenticate/LogoutUserController";
import { CreateRefreshTokenController } from "../../controllers/refreshToken/CreateRefreshTokenController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { Schema } from "./Schema";

const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const createRefreshTokenController = new CreateRefreshTokenController();
const logoutUserController = new LogouUserController();
const ensureAuthenticated = new EnsureAuthenticated();

/** The user registration route does not have the token as mandatory */
authRoutes.post("/login", Schema.create, authenticateUserController.execute);
authRoutes.post("/refresh-token", createRefreshTokenController.execute);

/** Users need to have the authentication token to access these routes */
authRoutes.use(ensureAuthenticated.execute);
authRoutes.post("/logout", logoutUserController.execute);

export { authRoutes };
