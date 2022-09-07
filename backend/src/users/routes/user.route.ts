import { Router } from "express";
import {
  CreateUserController,
  DeleteUserController,
  GetAllUsersController,
  GetCurrentUserController,
  UpdateUserController,
} from "../controllers";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const getCurrentUserController = new GetCurrentUserController();
const getAllUsersController = new GetAllUsersController();

usersRoutes.post("/", createUserController.execute);
usersRoutes.get("/me", getCurrentUserController.execute);
usersRoutes.patch("/:id", updateUserController.execute);
usersRoutes.get("/", getAllUsersController.execute);
usersRoutes.delete("/:id", deleteUserController.execute);

export { usersRoutes };
