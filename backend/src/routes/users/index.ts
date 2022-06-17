import { Router } from "express";
import { CreateUserController } from "../../controllers/Users/CreateUserController";
import { DeleteUserController } from "../../controllers/Users/DeleteUserController";
import { GetAllUsersController } from "../../controllers/Users/GetAllUsersController";
import { GetCurrentUserController } from "../../controllers/Users/GetCurrentUserController";
import { UpdateUserController } from "../../controllers/Users/UpdateUserController";
import { EnsureAdmin } from "../../middlewares/EnsureAdmin";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema, updateSchema } from "./schema";

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
