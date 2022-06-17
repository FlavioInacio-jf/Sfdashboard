import { Router } from "express";
import { CreateAddressController } from "../../controllers/addresses/CreateAddressController";
import { DeleteAddressController } from "../../controllers/addresses/DeleteAddressController";
import { UpdateAddressController } from "../../controllers/addresses/UpdateAddressController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema, updateSchema } from "./schemas";

const addressesRoutes = Router();
const createAddressController = new CreateAddressController();
const deleteAddressController = new DeleteAddressController();
const updateAddressController = new UpdateAddressController();

const ensureAuthenticated = new EnsureAuthenticated();
addressesRoutes.use(ensureAuthenticated.execute);

addressesRoutes.post(
  "/",
  validateResource(createSchema),
  createAddressController.execute,
);
addressesRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateAddressController.execute,
);
addressesRoutes.delete("/:id", deleteAddressController.execute);

export { addressesRoutes };
