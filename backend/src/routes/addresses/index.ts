import { Router } from "express";
import { CreateAddressController } from "../../controllers/addresses/CreateAddressController";
import { DeleteAddressController } from "../../controllers/addresses/DeleteAddressController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema } from "./schemas";

const addressesRoutes = Router();
const createAddressController = new CreateAddressController();
const deleteAddressController = new DeleteAddressController();

const ensureAuthenticated = new EnsureAuthenticated();
addressesRoutes.use(ensureAuthenticated.execute);

addressesRoutes.post(
  "/",
  validateResource(createSchema),
  createAddressController.execute,
);
addressesRoutes.delete("/:id", deleteAddressController.execute);

export { addressesRoutes };
