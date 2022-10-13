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

usersRoutes.use(ensureAuthenticated.execute);
usersRoutes.get("/me", getCurrentUserController.execute);
usersRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateUserController.execute,
);

usersRoutes.use(ensureAdmin.execute);
usersRoutes.post(
  "/",
  validateResource(createSchema),
  createUserController.execute,
);
usersRoutes.get("/", getAllUsersController.execute);
usersRoutes.delete("/:id", deleteUserController.execute);

export { usersRoutes };
