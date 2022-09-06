import { Router } from "express";
import {
  CreateUserController,
  DeleteUserController,
  GetAllUsersController,
  GetCurrentUserController,
  UpdateUserController,
} from "../controllers";

import { EnsureAdmin } from "../../middlewares/EnsureAdmin";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema, updateSchema } from "../schemas";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getCurrentUserController = new GetCurrentUserController();
const getAllUsersController = new GetAllUsersController();

const ensureAuthenticated = new EnsureAuthenticated();
const ensureAdmin = new EnsureAdmin();

/** The user registration route does not have the token as mandatory */
usersRoutes.post(
  "/",
  validateResource(createSchema),
  createUserController.execute,
);

/** Users need to have the authentication token to access these routes */
usersRoutes.use(ensureAuthenticated.execute);
usersRoutes.get("/me", getCurrentUserController.execute);
usersRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateUserController.execute,
);

usersRoutes.get("/", ensureAdmin.execute, getAllUsersController.execute);
usersRoutes.delete("/:id", ensureAdmin.execute, deleteUserController.execute);

export { usersRoutes };
