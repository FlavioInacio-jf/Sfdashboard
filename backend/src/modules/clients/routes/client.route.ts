import { Router } from "express";
import { EnsureAuthenticated, validateResource } from "../../app";
import { createClientSchema, updateClientSchema } from "../schemas";
import {
  createClientController,
  deleteClientController,
  getAllClientsController,
  getSingleClientController,
  updateClientController,
} from "../useCases";

const clientsRoutes = Router();

const ensureAuthenticated = new EnsureAuthenticated();

clientsRoutes.use(ensureAuthenticated.execute);
clientsRoutes.post(
  "/",
  validateResource(createClientSchema),
  createClientController.execute,
);
clientsRoutes.get("/", getAllClientsController.execute);
clientsRoutes.get("/:id", getSingleClientController.execute);
clientsRoutes.patch(
  "/:id",
  validateResource(updateClientSchema),
  updateClientController.execute,
);
clientsRoutes.delete("/:id", deleteClientController.execute);

export { clientsRoutes };
