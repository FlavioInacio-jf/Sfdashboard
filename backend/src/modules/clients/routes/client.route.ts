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
