import { Router } from "express";
import { CreateAddressController } from "../../controllers/addresses/CreateAddressController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema } from "./schemas";

const addressesRoutes = Router();
const createAddressController = new CreateAddressController();

const ensureAuthenticated = new EnsureAuthenticated();
addressesRoutes.use(ensureAuthenticated.execute);

addressesRoutes.post(
  "/",
  validateResource(createSchema),
  createAddressController.execute,
);

export { addressesRoutes };
