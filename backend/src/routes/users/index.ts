import { Router } from "express";
import { CreateUserController } from "../../controllers/Users/CreateUserController";
import { DeleteUserController } from "../../controllers/Users/DeleteUserController";
import { GetCurrentUserController } from "../../controllers/Users/GetCurrentUserController";
import { UpdateUserController } from "../../controllers/Users/UpdateUserController";
import { EnsureAdmin } from "../../middlewares/EnsureAdmin";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { Schema } from "./Schema";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getCurrentUserController = new GetCurrentUserController();
const ensureAuthenticated = new EnsureAuthenticated();
const ensureAdmin = new EnsureAdmin();

/** The user registration route does not have the token as mandatory */
usersRoutes.post("/", Schema.create, createUserController.execute);

/** Users need to have the authentication token to access these routes */
usersRoutes.use(ensureAuthenticated.execute);
usersRoutes.get("/me", getCurrentUserController.execute);
usersRoutes.patch("/:id", Schema.update, updateUserController.execute);
usersRoutes.delete("/:id", ensureAdmin.execute, deleteUserController.execute);

export { usersRoutes };
