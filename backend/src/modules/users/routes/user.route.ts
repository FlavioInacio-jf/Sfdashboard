import { Router } from "express";
import { EnsureAdmin, ensureAuthenticated, validateResource } from "../../app";
import { createSchema, updateSchema } from "../schemas";
import {
  createUserController,
  deleteUserController,
  getCurrentUserController,
  updateUserController,
} from "../useCases";
import { getAllUsersController } from "../useCases/GetAllUsers";

const usersRoutes = Router();

const ensureAdmin = new EnsureAdmin();

usersRoutes.use(ensureAuthenticated.execute.bind(ensureAuthenticated));
usersRoutes.get(
  "/me",
  getCurrentUserController.execute.bind(getCurrentUserController),
);
usersRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateUserController.execute.bind(updateUserController),
);

usersRoutes.use(ensureAdmin.execute);
usersRoutes.post(
  "/",
  validateResource(createSchema),
  createUserController.execute.bind(createUserController),
);
usersRoutes.get("/", getAllUsersController.execute.bind(getAllUsersController));
usersRoutes.delete(
  "/:id",
  deleteUserController.execute.bind(deleteUserController),
);

export { usersRoutes };
