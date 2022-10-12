import { Router } from "express";
import { EnsureAuthenticated, validateResource } from "../../app";
import {
  CreateClientController,
  DeleteClientController,
  GetAllClientsController,
  GetSingleClientController,
  UpdateClientController,
} from "../controllers";
import { createSchema, updateSchema } from "../schemas";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const deleteClientController = new DeleteClientController();
const getAllClientsController = new GetAllClientsController();
const getSingleClientController = new GetSingleClientController();
const updateClientController = new UpdateClientController();

const ensureAuthenticated = new EnsureAuthenticated();

clientsRoutes.use(ensureAuthenticated.execute);

clientsRoutes.post(
  "/",
  validateResource(createSchema),
  createClientController.execute,
);
clientsRoutes.get("/", getAllClientsController.execute);
clientsRoutes.get("/:id", getSingleClientController.execute);
clientsRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateClientController.execute,
);
clientsRoutes.delete("/:id", deleteClientController.execute);

export { clientsRoutes };
