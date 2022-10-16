import { Router } from "express";
import { ensureAuthenticated, validateResource } from "../../app";
import { createClientSchema, updateClientSchema } from "../schemas";
import {
  createClientController,
  deleteClientController,
  getAllClientsController,
  getSingleClientController,
  updateClientController,
} from "../useCases";

const clientsRoutes = Router();

clientsRoutes.use(ensureAuthenticated.execute.bind(ensureAuthenticated));
clientsRoutes.post(
  "/",
  validateResource(createClientSchema),
  createClientController.execute.bind(createClientController),
);
clientsRoutes.get(
  "/",
  getAllClientsController.execute.bind(getAllClientsController),
);
clientsRoutes.get(
  "/:id",
  getSingleClientController.execute.bind(getSingleClientController),
);
clientsRoutes.patch(
  "/:id",
  validateResource(updateClientSchema),
  updateClientController.execute.bind(updateClientController),
);
clientsRoutes.delete(
  "/:id",
  deleteClientController.execute.bind(deleteClientController),
);

export { clientsRoutes };
