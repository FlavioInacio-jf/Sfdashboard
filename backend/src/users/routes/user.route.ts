import { Router } from "express";
import { EnsureAdmin, EnsureAuthenticated, validateResource } from "../../app";

import {
  CreateUserController,
  DeleteUserController,
  GetAllUsersController,
  GetCurrentUserController,
  UpdateUserController,
} from "../controllers";

import { createSchema, updateSchema } from "../schemas";

const usersRoutes = Router();

const getCurrentUserController = new GetCurrentUserController();
const getAllUsersController = new GetAllUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const ensureAdmin = new EnsureAdmin();
const ensureAuthenticated = new EnsureAuthenticated();

usersRoutes.use(ensureAuthenticated.execute);
usersRoutes.get(
  "/me",
  validateResource(createSchema),
  getCurrentUserController.execute,
);
usersRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateUserController.execute,
);

usersRoutes.use(ensureAdmin.execute);
usersRoutes.post("/", createUserController.execute);
usersRoutes.get("/", getAllUsersController.execute);
usersRoutes.delete("/:id", deleteUserController.execute);

export { usersRoutes };
